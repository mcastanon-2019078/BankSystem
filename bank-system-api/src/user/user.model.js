/**
 * Represents a user in the system.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} username - The username of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} DPI - The DPI (Documento Personal de Identificación) of the user.
 * @property {string} address - The address of the user.
 * @property {string} phone - The phone number of the user.
 * @property {string} workname - The name of the user's workplace.
 * @property {number} age - The age of the user.
 * @property {string} role - The role of the user. Can be 'ADMIN' or 'CLIENT'.
 */

import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  DPI: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  workname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    enum: ['ADMIN', 'CLIENT'],
    default: 'CLIENT'
  }
},{
    versionKey: false
})

/**
 * Represents a User model.
 * @module User
 */
export default model('User', userSchema)
