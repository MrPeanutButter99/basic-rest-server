// Clases
import { Server } from './models/server.js';

// Modulos
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const server = new Server()
server.listen()


