'use strict'

import { Router } from "express"
import { getAllTransferH, getByIdTransferH, getTransferH } from "./transferH.controller.js";

const api = Router();

api.get('/get/:id', getTransferH);
api.get('/getById', getByIdTransferH);
api.get('/getAll/:id', getAllTransferH);

export default api