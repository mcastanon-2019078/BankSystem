import { Schema, model } from 'mongoose'

/**
 * Represents an account in the system.
 * @typedef {Object} Account
 * @property {number} NoAccount - The account number.
 * @property {number} balance - The account balance.
 * @property {string} typeAccount - The type of account. Can be 'saving' or 'current'.
 * @property {User} owner - The owner of the account.
 */

const accountSchema = new Schema({
  NoAccount: {
    type: Number,
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    required: true
  },
  typeAccount: {
    type: String,
    enum: ['saving', 'current'],
    default: 'saving'
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  versionKey: false
})

/**
 * Represents a Account model.
 * @module Account
 */
export default model('Account', accountSchema)
