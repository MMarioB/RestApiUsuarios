const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

// get all usuarios
router.get('/', usuarioController.getUsuariosList);

// get usuario by ID
router.get('/:id',usuarioController.getUsuarioByID);

// post usuario nuevo
router.post('/', usuarioController.crearNuevoUsuario);

// put usuario 
router.put('/:id', usuarioController.actualizarUsuario);

// delete usuario
router.delete('/:id',usuarioController.borrarUsuario);

// exporto la constante router para que pueda ser usada en los otros archivos
module.exports = router;