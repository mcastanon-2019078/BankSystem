import { Schema, model } from "mongoose"

const roomSchema = Schema({
    number:{
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ['DISPONIBLE', 'NO DISPONIBLE', 'EN MANTENIMIENTO'],
        required: true
    }, 
    
    hotelid:{
        type: Schema.ObjectId,
        ref: 'hotel',
        required: true
        
    }
})

export default model('room', roomSchema)