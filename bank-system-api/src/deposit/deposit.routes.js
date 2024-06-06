'use strict'

import { Router } from "express"
import { createDeposit, getDepositById, getDeposits } from './deposit.controller.js'
import {  deleteAccount, updateAccount } from "../account/account.controller.js"

const api = Router()

api.post('/add', createDeposit);
api.put('/update/:id', updateAccount);
api.get('/get', getDeposits);
api.get('/getById/:id', getDepositById);
api.delete('/delete/:id', deleteAccount);

export default api