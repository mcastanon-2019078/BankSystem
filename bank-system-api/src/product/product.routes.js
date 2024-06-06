'use strict'

import { Router } from "express"
import { addProduct, deleteProduct, getByIdProduct, getProduct, updateP } from './product.controller.js'

const api = Router()

api.post('/add', addProduct);
api.put('/update/:id', updateP);
api.delete('/delete/:id', deleteProduct);
api.get('/get', getProduct);
api.get('/getById/:id', getByIdProduct);

export default api