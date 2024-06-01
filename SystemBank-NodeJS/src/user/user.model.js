import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        minlength: [8, 'Password must be 8 characters'],
        required: true
    },
    phone: {
        type: String,
        minlength: 8,
        maxlength: 8,
        required: true
    },
    rol: {
        type: String,
        uppercase: true,
        enum: ['ADMIN', 'CLIENT'],
        required: true
    }
})

export default mongoose.model('user', userSchema)