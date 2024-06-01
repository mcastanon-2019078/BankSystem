import { Router } from 'express'
import {createUser, getUser, getUsers, updateUser, deleteUser, login} from './user.controller.js'
import { validateToken, validateRoleAdmin } from '../../middlewares/validateToken.js'

const api = Router()

api.post('/createUser', [validateToken, validateRoleAdmin], createUser)
api.post('/getUser/:id', [validateToken, validateRoleAdmin], getUser)
api.get('/getUsers', [validateToken, validateRoleAdmin], getUsers)
api.put('/updateUser/:id', [validateToken, validateRoleAdmin], updateUser)
api.delete('/deleteUser/:id', [validateToken, validateRoleAdmin], deleteUser)
api.post('/login', login)

export default api
