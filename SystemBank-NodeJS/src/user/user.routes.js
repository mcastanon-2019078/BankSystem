'use strict'

import express from 'express'
import { validateJwt, isAdmin, isClient } from '../middlewares/validate-jwt.js'
import { changeRol, deleteU, getU, login, registerU, searchU, test, updateU } from './user.controller.js'

const api = express.Router()

//middleware
//Role ADMIN
api.get('/test', [validateJwt, isAdmin], test)
api.put('/update/:id', [validateJwt, isAdmin], updateU)
api.delete('/delete/:id', [validateJwt, isAdmin], deleteU)
api.put('/changerol/:id', [validateJwt, isAdmin], changeRol)
//PUBLIC
api.post('/register',  registerU)
api.post('/login', login)
api.get('/get', [validateJwt], getU)
api.get('/search/:id',[validateJwt],  searchU)


export default api