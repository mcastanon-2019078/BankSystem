'use strict'
import mongoose from "mongoose"
import {Schema} from "mongoose"

const paymentsSchema = mongoose.Schema({
    nameService: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    datePayments: {
        type: String,
        required: true
    },

    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    }
})


export default mongoose.model('payments', paymentsSchema)