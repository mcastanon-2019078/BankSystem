import { comparePassword, encryptPassword } from '../../utils/encrypt.js'
import { createToken } from '../../utils/jwt.js'
import { createAccount } from '../account/account.controller.js'
import userModel from './user.model.js'

/**
 * Creates a new user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object containing the created user and account information.
 */
export const createUser = async (req, res) => {
  try {
    const data = req.body
    data.password = await encryptPassword(data.password)
    const user = new userModel(data)
    await user.save()
    const accountData = {
      NoAccount:  Math.floor(Math.random() * 10000000000000),
      balance: data.balance,
      typeAccount: data.typeAccount,
      owner: user._id
    }
    const {success, account, message} = await createAccount(accountData)
    if(!success) return res.status(500).send({ message: message })
    return res.status(200).send({ message: 'User created successfully! ' + message, user, account })
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user!', error })
  }
}

/**
 * Retrieves a user by their ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object containing the retrieved user.
 */
export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id)
    if (!user) return res.status(404).send({ message: 'User not found!' })
    return res.status(200).send({ message: 'User found!', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error getting user!', error })
  }
}

/**
 * Retrieves all users.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object containing the retrieved users.
 */
export const getUsers = async (req, res) => {
  try {
    const user = await userModel.find({})
    if (!user) return res.status(404).send({ message: 'User not found!' })
    return res.status(200).send({ message: 'Users found', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error getting users!', error })
  }
}

/**
 * Updates a user by their ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object containing the updated user.
 */
export const updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    if (!user)
      return res.status(404).send({ message: 'User not found, not updated!' })
    return res.status(200).send({ message: 'User updated successfully!', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error updating user!', error })
  }
}

/**
 * Deletes a user by their ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object containing the deleted user.
 */
export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).send({ message: 'User not found, not deleted!' })
    return res.status(200).send({ message: 'User deleted successfully!', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error deleting user!', error })
  }
}

/**
 * Logs in a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object containing the logged in user information and token.
 */
export const login = async (req, res) => {
  try {
    let user = await userModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    })
    if (user && (await comparePassword(req.body.password, user.password))) {
      let { password, ...userInfo } = user._doc
      let token = await createToken(userInfo)
      res.cookie('token', token)
      return res.send({
        message: `Welcome ${user.username}`,
        userInfo,
        token,
      })
    }
    return res.status(404).send({ message: 'Invalid credentials!' })
  } catch (error) {
    return res.status(500).send({ message: 'Error login!', error })
  }
}

/**
 * Creates a default admin user if no admin user exists.
 * @returns {void}
 */
export const defaultAdmin = async () => {
  try {
    const verifyUser = await userModel.find({})
    if (verifyUser.length > 0) return
    const password = await encryptPassword(process.env.PASSWORD_ADMIN)
    const user = new userModel({
      name: 'ADMINB',
      username: 'ADMINB',
      email: 'ADMINB@gmail.com',
      password,
      DPI: '1234567890123',
      address: 'Kinal',
      phone: '12345678',
      workname: 'Kinal',
      age: '25',
      role: 'ADMIN',
    })
    await user.save()
    return console.log('First admin created successfully!')
  } catch (error) {
    return console.log('Error creating first admin!', error)
  }
}
