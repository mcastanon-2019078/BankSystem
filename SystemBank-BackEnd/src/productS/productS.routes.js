'use strict'

import { Router } from "express"
import  { buyProduct } from './productS.controller.js'


const api = Router()

api.post('/buyProduct', buyProduct);

export default api
