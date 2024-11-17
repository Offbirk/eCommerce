const mongoose = require('mongoose');

const CarritoSchema = new mongoose.Schema({
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true},
    productos: [{
        cantidad: {type: Number, required: true},
        precio: {type: Number, required: true},
    }],
    fechaActualizacion: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Carrito', CarritoSchema)