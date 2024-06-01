'use strict'

import {Schema, model} from 'mongoose'

const invoiceSchema =Schema({
    nit:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        uppercase: true,
        enum: ['VISA', 'MASTERCARD', 'AMERICAN EXPRESS', 'CASH']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    reservation: {
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }
})

export default model('Invoice', invoiceSchema)