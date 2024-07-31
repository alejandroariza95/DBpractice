const { Router } = require('express')
const nuevoUsuario = require('../controllers/nuevoUsuario.controller')
const getUsuarios = require('../controllers/getusuarios.controller')
const getUsuarioById = require('../controllers/getUsuarioById.controller')

const router = Router()

router.get('/usuarios', getUsuarios )
router.get('/usuarioById', getUsuarioById)
router.post('/nuevoUsuario', nuevoUsuario)

/*
  TODO: Tarea!
*/

router.put('/editarUsuario', async (req, res) => {

})

router.delete('/eliminarUsuario', async (req, res) => {

})

module.exports = router