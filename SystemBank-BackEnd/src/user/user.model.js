'use strict'

import { Schema, model } from "mongoose"

const userSchemma = Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    DPI: {
        type: String,
        maxLength: 13
    },
    adress: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    work: {
        type: String
    },
    salary: {
        type: Number
    },
    role: {
        type: String,
        uppercase: true
    }
}, {
    versionKey: false
})

export default model('User', userSchemma);
