'use strict';
import { Router } from "express";
import { test, newTranfers } from "./tranfer.controller.js"


const api = Router()

api.get('/test', test)
api.post('/newTranfer', newTranfers)


export default api;