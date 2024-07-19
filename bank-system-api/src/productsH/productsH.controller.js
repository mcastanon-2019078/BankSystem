'use strict'

import ProductsH  from './productsH.model.js'

export const getProductH = async (req, res) => {
    try {
        const { id } = req.params;
        const history = await ProductsH.find({ user: id }).populate({ path: 'product', populate: 'product' });
        return res.status(200).send({ history })
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error getting' })
    }
}

export const getByIdProductH = async (req, res) => {
    try {
        const { id } = req.params
        const history = await ProductsH.findOne({ _id: id });
        return res.status(200).send({ history })
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error getting' })
    }
}

export const getProductsHs = async (req, res, internalCall = false) => {
    try {
        const productsHs = await ProductsH.findAll({
           order: [['createdAt', 'DESC']], 
        });

        if (internalCall) {
            return productsHs;
        } else {
            return res.status(200).send({ productsHs })
        }
    } catch (e) {
        if (internalCall) {
            throw e;
        } else {
            res.status(500).send({ message: 'Error getting Deposit General' })
        }
    }
}