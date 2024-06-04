'use strict'

import { Router } from "express"
import { deleteUser, getByIdUser, getRoleClient, getUser, login, saveUser, updateUser } from "./user.controller.js"

const api = Router()


api.post('/save', saveUser);
api.post('/login', login);
api.put('/update/:id', updateUser);
api.delete('/delete/:id', deleteUser);
api.get('/get', getUser);
api.get('/getById/:id', getByIdUser);
api.get('/getRoleClient', getRoleClient);

export default api