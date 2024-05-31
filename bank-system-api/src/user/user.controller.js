import userModel from './user.model.js'
import { createToken } from '../../utils/jwt.js'
import { comparePassword, encryptPassword } from '../../utils/encrypt.js'

export const createUser = async (req, res) => {
  try {
    const data = req.body
    data.password = await encryptPassword(data.password)
    const user = new userModel(data)
    await user.save()
    return res.status(200).send({ message: 'User created successfully', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error creating user' })
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id)
    if (!user) return res.status(404).send({ message: 'Users not found' })
    return res.status(200).send({ message: 'User found', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error getting user' })
  }
}

export const getUsers = async (req, res) => {
  try {
    const user = await userModel.find({})
    if (!user) return res.status(404).send({ message: 'User not found' })
    return res.status(200).send({ message: 'Users found', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error getting users' })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    if (!user)
      return res.status(404).send({ message: 'User not found, not updated' })
    return res.status(200).send({ message: 'User updated successfully', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error updating user' })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id)
    if (!user)
      return res.status(404).send({ message: 'User not found, not deleted' })
    return res.status(200).send({ message: 'User deleted successfully', user })
  } catch (error) {
    return res.status(500).send({ message: 'Error deleting user' })
  }
}

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
    return res.status(404).send({ message: 'Invalid credentials' })
  } catch (error) {
    return res.status(500).send({ message: 'Error login' })
  }
}

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
    return console.log('first admin created successfully')
  } catch (error) {
    return console.log('error creating first admin')
  }
}
