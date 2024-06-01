'use strict'

import Beneficios from "./beneficios.model.js"

export const save = async (req, res) => {
    try {
        let data = req.body
        let beneficios = new Beneficios(data)
        await beneficios.save()
        return res.send({ message: 'Benefits saved successfully' })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error saving benefits' })
    }
}


export const getBeneficios = async (req, res) => {
    try {
        let { id } = req.params
        let beneficios = await Beneficios.findById({ _id: id })
        if (!beneficios) return res.status(404).send({ message: 'Beneficios not found' })
        return res.send({ message: 'Beneficios found', room })
    } catch (error) {
        return res.status(500).send({ message: 'Error getting beneficios' })
    }
}

export const updateBeneficios = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let beneficios = await Beneficios.findByIdAndUpdate({ _id: id }, data, { new: true })
        if (!beneficios) return res.status(404).send({ message: 'Beneficios not found not updated' })
        return res.send({ message: 'Beneficios updated successfully', beneficios })
    } catch (error) {
        return res.status(500).send({ message: 'Error updating beneficios' })
    }
}

export const deleteB = async (req, res) => {
    try {
        let { id } = req.params
        let beneficios = await Beneficios.findByIdAndDelete({ _id: id })
        if (!beneficios) return res.status(404).send({ message: 'Beneficios not found not deleted' })
        return res.send({ message: 'Beneficios deleted successfully', beneficios })
    } catch (error) {
        return res.status(500).send({ message: 'Error deleting beneficios' })
    }
}