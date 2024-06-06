'use strict'

import { Router } from "express"
import  { getByIdProductH, getProductH }  from './productsH.controller.js'

const api = Router()

api.get('/get/:id', getProductH);
api.get('/getById/:id', getByIdProductH);

export default api