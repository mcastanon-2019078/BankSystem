import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
import paymentsRoutes from "../src/pagos/payments.routes.js"

const app = express() //creamos el servidor
config()
const port = process.env.PORT || 3000

//Configuramos el servidor express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Aceptamos o denegamos las solicitudes de diferentes origenes(local, remoto)
app.use(cors())
app.use(helmet())

//Crear logs de solicitudes al servidor HTTP
app.use(morgan('dev'))

//Middleware que permite gestionar las cookies
app.use(cookieParser())

app.use(userRoutes)
app.use(paymentsRoutes)

export const initServer = () => {
  app.listen(port, ()=> console.log(`Server HTTP running in port ${port}`))
}
