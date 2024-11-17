const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controladores/controladorUsuario');

// Rutas para el CRUD de usuarios
router.post('/', controladorUsuario.crearUsuario); 
router.get('/', controladorUsuario.obtenerUsuarios); 
router.put('/:id', controladorUsuario.actualizarUsuario); 
router.delete('/:id', controladorUsuario.eliminarUsuario); 

module.exports = router;