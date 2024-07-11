'use strict'

import { Router } from "express"
import { buyService } from './shopService.controller.js'

const api = Router()

api.post('/buyService', buyService);

export default api
