const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { //Aquí cambiar a MONGO_URI
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch(error) {
        console.error('Error en la conexión a MongoDB: ', error);
        process.exit();
    }
}

module.exports = conectarBD