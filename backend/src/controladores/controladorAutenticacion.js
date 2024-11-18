const Usuario = require('../modelos/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//clave secreta para confirmar el JWT
const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_para_jwt';

//Registrar un nuevo usuario
exports.registrarUsuario = async (req, res) => {
    try {
        const {nombre, correo, password, direccion, telefono} = req.body;

        //verifique si ya existe el usuario
        const usuarioExistente = await Usuario.findOne({correo});
        if(usuarioExistente) {
            return res.status(400).json({mensaje: 'El correo ya está registrado'})
        }
    //Encripta la contraseña
        const passwordEncriptado = await bcrypt.hash(password, 10);
    // Crear un nuevo usuario
        const nuevoUsuario = new Usuario({
            nombre, 
            correo, 
            password: passwordEncriptado,
            direccion,
            telefono
        });

        await nuevoUsuario.save();
        res.status(201).json({mensaje:'usuario registrado con éxito'})
    } catch(error) {
        res.status(500).json({mensaje: 'Error al registrar el usuario', error: error.message})
    }
};

//Iniciar sesión de un usuario
exports.iniciarSesion = async(req, res) => {
    try {
        const {correo, password} = req.body

        //Verificar si el usuario existe
        const usuario = await Usuario.findOne({correo});
        if(!usuario) {
            return res.status(400).json({mensaje: 'Correo o contraseña incorrectos'});
        }
        //Verificar la contraseña
        const esPasswordValido = await bcrypt.compare(password, usuario.password);
        if(!esPasswordValido) {
            return res.status(400).json({mensaje: 'correo o contraseña incorrectos'})
        }
        // Crea el Token JWT
        const token = jwt.sign({id:usuario._id, rol:usuario.rol}, JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({mensaje: 'Inicio de sesion exitosa', token});
    } catch(error) {
        res.status(500).json({mensaje: 'Error al iniciar sesión', error: error.message});
    }
};