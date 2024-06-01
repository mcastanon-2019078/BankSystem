import { initServer } from './configs/app.js'
import { connect  } from './configs/db.js'
import { defaultAdmin } from './src/user/user.controller.js'
 
initServer() 
connect()
defaultAdmin()
