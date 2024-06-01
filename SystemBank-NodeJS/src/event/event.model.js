'use strict'

import { Schema, model} from 'mongoose'

const eventSchema = Schema({
    name: {
        type: String,
        required: true
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
    status: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    },
    hotel: {
        type: Schema.ObjectId,
        ref: 'hotel',
        required: true
    } 
 }) 

export default model('event', eventSchema)