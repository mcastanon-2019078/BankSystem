'use strict'

import { Router } from "express"
import { getByIdDepositH, getDepositH } from "./depositH.controller.js"

const api = Router()

api.get('/get/:id', getDepositH);
api.get('/getById', getByIdDepositH);

export default api