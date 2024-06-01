'use strict'

import Category from './category.model.js'
import { checkUpdate } from '../utils/validator.js'

export const addCategory = async (req, res) => {
    try {
        //Getting data
        let data = req.body
        //Creating
        let category = new Category(data)
        //Saving
        await category.save()
        //Answer
        return res.status(200).send({ message: 'Category registered successfully.' })       
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error creating the category.' })
    }
}

export const getCategories = async(req, res)=>{
    try {
        let categories = await Category.find()
        return res.status(200).send(categories)
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting the categories.' })
    }
}

export const getCategory = async(req, res)=>{
    try {
        let {id} = req.params
        let category = await Category.findById(id)
        if(!category){
            return res.status(404).send({ message: 'Category not found.' })
        }
        return res.status(200).send(category)
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting the category.' })
    }
}

export const updateCategory = async(req, res)=>{
    try {
            let {id} = req.params
            let data = req.body
            let update = checkUpdate(data, id)
            if(!update){
                return res.status(404).send({ message: 'Have submitted some data that cannot be update or missing.' })
            }
            let updatedCategory = await Category.updateOne(
                {_id: id},
                data,
                {new: true}
            )
            if(!updatedCategory) return res.status(404).send({message:'Category not found.'})
            return res.status(200).send({message:'The category has been updated successfully.'})
        } catch (err) {
            console.error(err)
            return res.status(500).send({ message: 'Error updating the category.' })
        }
}

export const deleteCategory = async(req, res)=>{
    try {
       let {id} = req.params
       let deletedCategory = await Category.findByIdAndDelete(id)
       if(!deletedCategory){
           return res.status(404).send({ message: 'Category not found.' })
       }
       //Replying
       return res.status(200).send({message: `The category ${deletedCategory.name} has been deleted successfully.`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting your category.'})
    }
}