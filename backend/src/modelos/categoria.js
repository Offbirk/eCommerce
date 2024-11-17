const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nombre: {type: String, required: true, unique: true},
    descripcion: {type: String},
    imagen: {type: String}, //URL recordar
    productos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Producto'}],
    fechaCreacion: {type: Date, default: Date.now},
    estado: {type: Boolean, default: true}
});

module.exports = mongoose.model('Categoria', CategoriaSchema)