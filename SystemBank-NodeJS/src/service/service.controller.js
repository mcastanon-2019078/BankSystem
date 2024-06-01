'use strict'

import { checkUpdate } from '../utils/validator.js'
import Service from './service.model.js'
import Hotel from '../hotel/hotel.model.js'

export const saveS = async(req, res)=>{
    try{
        let data = req.body
        let service = new Service(data)
        await service.save()
        return res.send({message: 'Service save Successfull'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error saved Service', err})
    }
}

export const updateS = async(req, res)=>{
    try{
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: 'Have sumbitted some data that cannot be updated or missing data'})
        let updatedService = await Service.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedService) return res.status(401).send({message: 'Service not found and not Updated'})
        return res.send({message: 'Updated service', updatedService})
    }catch(err){
        console.error(err)
        if(err.keyValue.name) return res.status(400).send({message: `Name ${err.keyValue.name} is already taken`})
        return res.status(500).send({message: 'Error updating service'})
    }
}

export const deleteS = async(req, res)=>{
    try{
        let { id } = req.params
        let deleteS = await Service.findOneAndDelete({_id: id})
        if (!deleteS) return res.status(404).send({message: 'Service not found and not deleted'})
        return res.send({message: `service ${deleteS} deleted success`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting service'})
    }
}

export const getS = async(req, res)=>{
    try{
        let service = await Service.find()
        return res.send({ service })
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting Services'})
    }
}

export const searchS = async(req, res)=>{
    try{
        let { id } = await req.params
        let service = await Service.findOne({_id: id})
        if(!service) return res.status(404).send({message: 'Service not found'})
        return res.send({service})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error finding service'})
    }
}

export const getHotels = async (req, res) => {
    try {
      const { id } = req.params;
      const hotel = await Hotel.findById(id).select({
        service: {
          $elemMatch: {name: 1, description: 1 }
        }
      });
      if (!hotel) return res.status(404).send({ message: 'Hotel not found' });
      return res.send({ hotel });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: 'Error getting hotel' });
    }
  };