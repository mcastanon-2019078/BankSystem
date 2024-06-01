import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import beneficiosRoutes from '../src/beneficios/beneficios.routes.js' 

const app = express() //creamos el servidor
config()
const port = process.env.PORT || 3200
 
//Configuramos el servidor express
app.use(express.urlencoded({extended: false}))
app.use(express.json())
 
//Aceptamos o denegamos las solicitudes de diferentes origenes(local, remoto)
app.use(cors())
app.use(helmet())
 
//Crear logs de solicitudes al servidor HTTP
app.use(morgan('dev'))

app.use(beneficiosRoutes)
 
export const initServer = () =>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}