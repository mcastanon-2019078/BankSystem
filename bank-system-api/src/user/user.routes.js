/**
 * @fileoverview This file contains the routes for user-related operations.
 * @module UserRoutes
 */

import { Router } from 'express'
import { validateRoleAdmin, validateToken } from '../../middlewares/validateToken.js'
import { createUser, deleteUser, getUser, getUsers, login, updateUser } from './user.controller.js'

const api = Router()

/**
 * @route POST /createUser
 * @description Create a new user
 * @access Private (requires token and admin role)
 */
api.post('/createUser', [validateToken, validateRoleAdmin], createUser)

/**
 * @route POST /getUser/:id
 * @description Get a user by ID
 * @param {string} id - The ID of the user
 * @access Private (requires token and admin role)
 */
api.post('/getUser/:id', [validateToken, validateRoleAdmin], getUser)

/**
 * @route GET /getUsers
 * @description Get all users
 * @access Private (requires token and admin role)
 */
api.get('/getUsers', [validateToken, validateRoleAdmin], getUsers)

/**
 * @route PUT /updateUser/:id
 * @description Update a user by ID
 * @param {string} id - The ID of the user
 * @access Private (requires token and admin role)
 */
api.put('/updateUser/:id', [validateToken, validateRoleAdmin], updateUser)

/**
 * @route DELETE /deleteUser/:id
 * @description Delete a user by ID
 * @param {string} id - The ID of the user
 * @access Private (requires token and admin role)
 */
api.delete('/deleteUser/:id', [validateToken, validateRoleAdmin], deleteUser)

/**
 * @route POST /login
 * @description User login
 * @access Public
 */
api.post('/login', login)

export default api
