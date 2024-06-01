'use strict'

import { Schema, model } from "mongoose"

const benefitsSchema = Schema({
    description: {
        type: String,
        required: true
    },
    benefitName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    startDate: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: String,
        required: true
    },
    idPayments: {
        type: Schema.ObjectId,
        ref: 'Payments',
        required: true
    }
})

export default model('benefits', benefitsSchema)