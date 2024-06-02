/**
 * Express server configuration file.
 * @module app
 */

import cookieParser from 'cookie-parser'
import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import accountRoutes from '../src/account/account.routes.js'
import userRoutes from '../src/user/user.routes.js'

const app = express() // Create the server
config()
const port = process.env.PORT || 3000

// Configure the express server
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Accept or deny requests from different origins (local, remote)
app.use(cors())
app.use(helmet())

// Create logs of HTTP requests
app.use(morgan('dev'))

// Parse request cookies
app.use(cookieParser())

// API routes
app.use(userRoutes)
app.use(accountRoutes)

/**
 * Initializes the server and starts listening on the specified port.
 * @function initServer
 * @returns {void}
 */
export const initServer = () => {
  app.listen(port, () => console.log(`Server HTTP running in port ${port}`))
}
