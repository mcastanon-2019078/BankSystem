'use strict'

import express from 'express'
import {
    isAdmin,
    isClient,
    validateJwt
}  from '../middlewares/validate-jwt.js'


import {
    test,
    addHotel,
    getHotels,
    getHotel,
    updateHotel,
    deleteHotel
} from './hotel.controller.js'

const api = express.Router()

api.post('/test', test)
api.post('/addHotel', [validateJwt, isAdmin], addHotel)
api.get('/getHotels', [validateJwt],getHotels)
api.get('/getHotel/:id', [validateJwt],getHotel)
api.put('/updateHotel/:id', [validateJwt, isAdmin],updateHotel)
api.delete('/deleteHotel/:id', [validateJwt, isAdmin],deleteHotel)

export default api