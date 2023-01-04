import { Router } from 'express'
import { usuariosGet, usuariosPOST, usuariosDELETE, usuariosPUT } from '../controllers/usuarios.js'

const router = Router()

router.get('/', usuariosGet )

  router.put('/', usuariosPUT )        

  router.post('/:id', usuariosPOST )          
  
  router.delete('/', usuariosDELETE )          


export { router }