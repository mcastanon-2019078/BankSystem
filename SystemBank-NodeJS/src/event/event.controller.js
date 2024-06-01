'use strict'

import Event from '../event/event.model.js'
import { checkUpdate } from '../utils/validator.js'

export const test = (req, res) => {
    return res.send({ message: 'Function test is running | Event' })
}

export const saveEvent = async (req, res) => {
    try {
        let data = req.body
        data.status = true
        let event = new Event(data)
        await event.save()
        return res.status(200).send({ message: 'Event saved succesfully.' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error saving event', err })
    }
}

export const updateEvent = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have submitted some data that cannot be updated or missing data.' })
        let updatedEvent = await Event.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        ).populate('user', 'hotel', 'service', [])
        if (!updatedEvent) return res.status(404).send({ message: 'Event not found, not updated.' })
        return res.send({ message: 'Event updated succesfully.', updatedEvent })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating event.', err })
    }
}

export const changeStatus = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        data.status = false
        if ((data.name != null) || (data.description != null) || (data.entryDate != null) || (data.price != null) || (data.user != null)) {
            return res.status(401).send({ message: 'You only can update the status.' })
        }
        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have submitted some data that cannot be updated or missing data.' })
        let updateEventFalse = await Event.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!updateEventFalse) return res.status(404).send({ message: 'Event not found, not updated.' })
        return res.send({ message: 'Event updated succesfully', updateEventFalse })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating event.', err })
    }
}

export const searchEvent = async (req, res) => {
    try {
        let { id } = req.params
        let events = await Event.findOne({ _id: id }).populate('user', [])
        if (!events) return res.status(404).send({ message: 'Event not found.' })
        return res.status(200).send({ message: 'Event found', events })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error searching event', err })
    }
}

export const getEvents = async (req, res) => {
    try {
        let events = await Event.find()
        return res.send({ events })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting event.' })
    }
}