//Imports
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'


import userRoutes from '../src/user/user.routes.js'
import hotelRoutes from '../src/hotel/hotel.routes.js'
import serviceRoutes from '../src/service/service.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import invoiceRoutes from '../src/invoice/invoice.routes.js'
import reservationRoutes from '../src/reservation/reservation.routes.js'
import roomRoutes from '../src/room/room.routes.js'
import eventRoutes from '../src/event/event.routes.js'
//Configuration
const app = express()
config()

const port = process.env.PORT || 3200

//Configurating the server 
//(Configurando el servidor de express)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors()) //Acepta o reniega las solicitudes.
app.use(helmet()) //Seguridad
app.use(morgan('dev'))

//Routes
app.use('/user', userRoutes)
app.use('/hotel',hotelRoutes)
app.use('/service',serviceRoutes)
app.use('/category', categoryRoutes)
app.use('/invoice', invoiceRoutes)
app.use('/reservation', reservationRoutes)
app.use('/room', roomRoutes)
app.use('/event', eventRoutes)

//Levantamos el servidor

export const initServer = () => {
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)

}