'use strict'

import { Router } from "express"
import { addAccount, deleteAccount, getAccounts, getByIdAccount, getByUser, movementsHight, movementsUnder, updateAccount } from "./account.controller.js";

const api = Router();

api.post('/add', addAccount);
api.put('/update/:id', updateAccount);
api.delete('/delete/:id', deleteAccount);
api.get('/get', getAccounts);
api.get('/getById/:id', getByIdAccount);
api.get('/getMovementsHigh', movementsHight);
api.get('/getMovementsUnder', movementsUnder);
api.get('/getByUser/:id', getByUser);

export default api;