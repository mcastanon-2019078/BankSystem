import { Schema, model } from "mongoose"

const reservationSchema = Schema({
    description: {
        type: String,
        required: true
    },
    entryDate:{
        type: Date,
        required: true
    },
    departureDate:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: Boolean
    }, 
    price:{
        type: Number,
        required: true
    }, 
    userId: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    },
    roomId: {
        type: Schema.ObjectId,
        ref: 'room',
        required: true
    }
})

export default model('reservation', reservationSchema)