import express from "express"
import cors from 'cors'

import { router } from '../routes/user.js'


class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.apiUsuariosPath = '/api/usuarios'

        // Middlewares
        this.middlewares()

        // Rutas de mi aplicación
        this.routes()
    }

    middlewares() {

        // CORS
        this.app.use( cors() )

        // Lectura y parseo del body
        this.app.use( express.json())

        // Directorio púlico
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.apiUsuariosPath, router)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando el puerto: ", this.port)
        })
    }
}

export { Server }