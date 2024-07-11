'use strict'

import { Router } from "express"
import { deleteS, getByIdServices, getServices, saveService, updatedService } from "./services.controller.js";

const api = Router()

api.post('/save', saveService);
api.put('/updateService/:id', updatedService);
api.delete('/deleteS/:id', deleteS);
api.get('/getServices', getServices);
api.get('/getByIdServices/:id', getByIdServices)

export default api