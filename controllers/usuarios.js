import { response } from 'express'

const usuariosGet = (req, res = response) => {

    res.json({
        ok: true,
        mensaje: "get API - Controlador"
    })
}

const usuariosPOST = (req, res = response) => {
    // Reading qParams --> ?qParam=1&qParam2=hola
    const { page, limit } = req.query

    // Reading normal params --> /param1/:param2
    const id = req.params.id

    // Reading body
    const { nombre } = req.body

    res.json({
        ok: true,
        body: {
            nombre,
            id
        },
        params: {
            page,
            limit
        }
    })
}

const usuariosPUT = (req, res = response) => {

    res.json({
        ok: true,
        mensaje: "put API - Controlador"
    })
}

const usuariosDELETE = (req, res = response) => {

    res.json({
        ok: true,
        mensaje: "delete API - Controlador"
    })
}


export  {
            usuariosGet,
            usuariosPOST,
            usuariosPUT,
            usuariosDELETE
        }