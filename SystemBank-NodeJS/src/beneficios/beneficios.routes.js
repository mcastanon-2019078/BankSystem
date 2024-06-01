'use strict'

import { Router } from "express"
import { save, getBeneficios, updateBeneficios, deleteB } from "./beneficios.controller.js"

const api = Router()

api.post('/save', save)
api.get('/get', getBeneficios)
api.put('/update/:id', updateBeneficios)
api.delete('/delete/:id', deleteB)

export default api