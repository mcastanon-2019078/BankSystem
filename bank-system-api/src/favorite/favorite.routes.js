'use strict'

import { Router } from "express"
import { addFavorite, deleteFavorite, getByIdFavorite, getFavorite } from "./favorite.controller.js"

const api = Router()

api.post('/add', addFavorite);
api.delete('/delete/:id', deleteFavorite);
api.get('/get', getFavorite);
api.get('/getById/:id', getByIdFavorite);

export default api