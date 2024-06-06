'use strict'

import { Router } from "express"
import { deleteUser, getByIdUser, getRoleClient, getUser, login, saveUser, updateUser } from "./user.controller.js"
import { validateToken, validateRoleAdmin } from "../../middlewares/validateToken.js"

const api = Router()

api.post('/save', [validateToken, validateRoleAdmin],  saveUser);
api.post('/login', login);
api.put('/update/:id', [validateToken, validateRoleAdmin], updateUser);
api.delete('/delete/:id', [validateToken, validateRoleAdmin], deleteUser);
api.get('/get',  [validateToken, validateRoleAdmin], getUser);
api.get('/getById/:id', [validateToken, validateRoleAdmin], getByIdUser);
api.get('/getRoleClient', [validateToken, validateRoleAdmin], getRoleClient);

export default api