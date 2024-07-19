'use strict'


import { Router } from "express"
import { createTransfer, getTransferById, getTransfers, updateTransfer } from './transfer.controller.js'

const api = Router();

api.post('/add', createTransfer);
api.put('/update/:id', updateTransfer);
api.get('/get', getTransfers);
api.get('/getById', getTransferById);

export default api