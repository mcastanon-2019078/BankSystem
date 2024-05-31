import { Schema, model } from "mongoose";

const tranfersSchema = Schema({
  amount: { 
    type: Number,
    required: true
    },
  date: {
    type: Date,
    default: Date.now(),
    required: true
  },
  description:{
    type: String,
    required: true
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'cuentas',
    required: true
  }
})

export default model('Tranfers', tranfersSchema)