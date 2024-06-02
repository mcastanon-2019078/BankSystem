/**
 * @fileoverview This file contains the routes for account-related operations.
 * @module AccountRoutes
 */

import { Router } from 'express'
import { validateRoleAdmin, validateToken } from '../../middlewares/validateToken.js'
import {
  deleteAccount,
  getAccount, getAccounts,
  updateAccount
} from './account.controller.js'

const api = Router()

/**
 * @route GET /accounts
 * @description Get all accounts
 * @access Private (requires token and admin role)
 */
api.get('/accounts', [validateToken, validateRoleAdmin], getAccounts)

/**
 * @route POST /account/:id
 * @description Get an account by ID
 * @param {string} id - The ID of the account
 * @access Private (requires token and admin role)
 */
api.post('/account/:id', [validateToken, validateRoleAdmin], getAccount)

/**
 * @route PUT /account/:id
 * @description Update an account by ID
 * @param {string} id - The ID of the account
 * @access Private (requires token and admin role)
 */
api.put('/account/:id', [validateToken, validateRoleAdmin], updateAccount)

/**
 * @route DELETE /account/:id
 * @description Delete an account by ID
 * @param {string} id - The ID of the account
 * @access Private (requires token and admin role)
 */
api.delete('/account/:id', [validateToken, validateRoleAdmin], deleteAccount)

export default api
