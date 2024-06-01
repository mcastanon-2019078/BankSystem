'use strict'

import { Router } from 'express'

import { addReservation, updateReservation, searchReservation, changeStatus } from './reservation.controller.js'

import {
    validateJwt,
    isAdmin,
    isClient,
} from '../middlewares/validate-jwt.js'

const api = Router()

api.post('/addReservation', [validateJwt, isClient], addReservation)
api.put('/updateR/:id', [validateJwt, isClient],updateReservation)
api.get('/searchReservation/:id',[validateJwt, isAdmin], searchReservation)
api.put('/changeStatus/:id',[validateJwt, isAdmin] ,changeStatus)
export default api