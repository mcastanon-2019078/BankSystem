'use strict'

import Payments from "./payments.model.js"
import User from "../user/user.model.js"


export const savePayments = async (req, res) => {
    try {
        let data = req.body
        let user = await User.findOne({ _id: data.user })
        if (!user) return res.status(404).send({ mesagge: 'User not found' })
        let payments = new Payments(data)
        await payments.save()
        return res.send({ message: ' Pago agregado exitosamente' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ mesagge: 'Error al agregar el pago ' })
    }
}



/*export const updatePayments = async(req, res) => {
    try {
        let {id} = req.params
        let datos = req.body
        let updatePayments = await Payments.findOneAndUpdate(
            {_id: id},
                 datos,
            {new: true}

        )
        if(!updatePayments)return res.status(401).send({message: 'No se puedo actualizar datos'})

        return res.send({message:'Actualizado',updatePayments})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Error al actulizar'})
    }
}*/


export const listarPayments = async (req, res) => {
    try {
        let payments = await Payments.find()
        if (payments.legth === 0) return res.status(400).send({ mesagge: 'Error' })
        return res.send({ payments })
    } catch (error) {
        console.error(err)
        return res.status(500).send({ mesagge: 'No existen ' })
    }
}




export const deletePayments = async (req, res) => {
    try {
        let { id } = req.params
        let deletePay = await Payments.findOneAndDelete({ _id: id })
        if (!deletePay) return res.status(404).send({ mesagge: 'Payments not found and not deleted' })
        return res.send({ mesagge: ` Payments deleted successfully` })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ mesagge: 'Error deleting Payments ' })
    }
}





