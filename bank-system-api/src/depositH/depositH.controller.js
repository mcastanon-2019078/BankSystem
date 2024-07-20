'use strict'

import depositH from './depositH.model.js'



export const getDepositH = async (req, res) => {
    try {
        const { id } = req.params;
        const history = await depositH.find({ user: id }).populate('deposit').populate('user');
        return res.status(200).send({ history })
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error getting' })
    }
}


export const getByIdDepositH = async (req, res) => {
    try {
        const { id } = req.params
        const history = await depositH.findOne({ _id: id });
        return res.status(200).send({ history })
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error getting' })
    }
}

export const getDepositHs = async (req, res, internalCall = false) => {
    try {
        const depositHs = await depositH.findAll({
           order: [['createdAt', 'DESC']], 
        });

        if (internalCall) {
            return depositHs;
        } else {
            return res.status(200).send({ depositHs })
        }
    } catch (e) {
        if (internalCall) {
            throw e;
        } else {
            res.status(500).send({ message: 'Error getting Deposit General' })
        }
    }
}

