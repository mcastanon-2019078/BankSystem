'use strict'

import { Router } from 'express'

import { saveRoom, addRoom, updateRoom, deleteRoom, getRooms, searchRoomById} from './room.controller.js'
import { isAdmin, validateJwt } from '../middlewares/validate-jwt.js'


const api = Router()

api.post('/saveRoom', [validateJwt, isAdmin], saveRoom)
api.post('/add',[validateJwt, isAdmin], addRoom)
api.put('/update/:id',[validateJwt, isAdmin], updateRoom)
api.delete('/delete/:id', [validateJwt, isAdmin], deleteRoom)
api.get('/getRooms', [validateJwt], getRooms)
api.get('/searchRoom/:id', [validateJwt],searchRoomById)
export default api