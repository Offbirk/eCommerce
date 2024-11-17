const express = require('express');
const router = express.Router();
const controladorCarrito = require('../controladores/controladorCarrito');

// Rutas para el CRUD de usuarios
router.post('/', controladorCarrito.crearCarrito); 
router.get('/:usuarioId', controladorCarrito.obtenerCarritos); 
router.put('/:id', controladorCarrito.actualizarCarrito); 
router.delete('/:id', controladorCarrito.eliminarCarrito); 

module.exports = router;