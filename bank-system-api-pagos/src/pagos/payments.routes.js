'use strict'

import Express from "express"
import { savePayments } from "./payments.controller.js"
import { listarPayments } from "./payments.controller.js"
import { deletePayments } from "./payments.controller.js"


const api = Express.Router()


api.post('/savePayments', savePayments)
api.get('/listarPayments', listarPayments)
api.delete('/deletePayments/:id', deletePayments)


export default api