'use strict';

import { Schema, model } from 'mongoose';

const benefitsSchema = new Schema({
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
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    Payment:{
        type: Schema.Types.ObjectId,
        ref: 'Payment',
        required: true
    }
},
{
    versionKey: false
});

export default model('Benefits', benefitsSchema);
