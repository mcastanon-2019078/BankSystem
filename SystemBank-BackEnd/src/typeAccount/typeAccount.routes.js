'use strict'

import { Router } from "express"
import { addTypeA, getByIdTypeA, getTypeA, deleteTypeA, updateTypeA } from './typeAccount.controller.js'

const api = Router()

api.post('/add', addTypeA);
api.put('/update/:id', updateTypeA);
api.delete('/delete/:id', deleteTypeA);
api.get('/get', getTypeA);
api.get('/getById/:id', getByIdTypeA);

export default api