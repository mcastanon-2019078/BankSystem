'use strict'

import { Router } from "express"
import { getByIdServicesShopH, getServicesShopH } from "./servicesShopH.controller.js"

const api = Router();

api.get('/get/:id', getServicesShopH);
api.get('/getById/:id', getByIdServicesShopH);

export default api