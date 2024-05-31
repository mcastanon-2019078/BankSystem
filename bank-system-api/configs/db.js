// Conexión a MongoDB
'use strict'

import mongoose from 'mongoose'

export const connect = async () => {
  try {
    mongoose.connection.on('error', () => {
      console.log('MongoDB | could not be connect to mongodb')
      mongoose.disconnect()
    })
    await mongoose.connect(process.env.DB_URL)
    console.log('Connect Mongo DB')
  } catch (err) {
    console.error('Database connection failed', err)
  }
}
