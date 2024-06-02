'use strict'

import jwt from 'jsonwebtoken'
import userModel from '../src/user/user.model.js'

/**
 * Middleware function to validate the token in the request.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A Promise that resolves when the validation is complete.
 */
export const validateToken = async (req, res, next) => {
  try {
    let { token } = req.cookies
    if (!token) return res.status(401).send('Unauthorized')
    let { _id } = jwt.verify(token, process.env.SECRET_KEY)
    let user = await userModel.findById({ _id }, { password: 0 })
    if (!user) return res.status(404).send({ message: 'User not found - Unauthorized' })
    req.user = user
    next()
  } catch (error) {
    console.error(error)
    return res.status(401).send({ message: 'Invalid or expired token' })
  }
}

/**
 * Middleware function to validate if the user has the role of 'ADMIN'.
 * If the user does not have the role or has the role of 'CLIENT', it returns a 401 Unauthorized response.
 * Otherwise, it calls the next middleware function.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A Promise that resolves when the middleware is complete.
 */
export const validateRoleAdmin = async (req, res, next) => {
  try {
    let { role } = req.user
    if (!role || role === 'CLIENT')
      return res.status(401).send({ message: 'You dont have access' })
    next()
  } catch (error) {
    console.error(error)
    return res.status(401).send({ message: 'Unauthorized role' })
  }
}
