'use strict'

import { Router } from 'express'

import {
    saveEvent,
    test,
    updateEvent,
    changeStatus,
    searchEvent,

    getEvents
} from './event.controller.js'

import {
    validateJwt,
    isAdmin,
    isClient,
} from '../middlewares/validate-jwt.js'

const api = Router()

api.post('/saveEvent', [validateJwt, isClient], saveEvent,)
api.put('/updateEvent/:id', [validateJwt, isAdmin], updateEvent)
api.put('/changeStatus/:id', [validateJwt, isAdmin], changeStatus)
api.get('/search/:id', [validateJwt], searchEvent)
api.get('/getEvents', [validateJwt], getEvents)

api.get('/test', test)

export default api