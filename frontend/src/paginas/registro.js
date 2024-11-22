import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Registrar = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate('');

    const Registrarse = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await axios.post('http://localhost:5000/api/usuarios/registrar',
                { nombre, correo, password, direccion, telefono });
            const { token } = respuesta.data;
            localStorage.setItem('token', token);
            alert('Usuario registrado con éxito!');
            navigate('/productos');
        } catch (error) {
            console.error('Error de registro', error);
            alert('No se realizó el registro');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Crear una cuenta</h2>
                <form className="mt-8 space-y-4" onSubmit={Registrarse}>
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700"> nombre </label>
                        <input nombre="nombre" type="text" placeholder='Ingrese su nombre' value={nombre}
                            onChange={(e) => setNombre(e.target.value)} required />
                        <label htmlFor="correo" className="block text-sm font-medium text-gray-700"> correo </label>
                        <input nombre="correo" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                        type="email" placeholder='ejemplo@nombre.com' value={correo}
                            onChange={(e) => setCorreo(e.target.value)} required />
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700"> password </label>
                        <input nombre="password" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                        type="password" placeholder='Ingrese su contraseña' value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="direccion" className="block text-sm font-medium text-gray-700"> direccion </label>
                        <input nombre="direccion" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                        type="text" placeholder='Ingrese su dirección de domicilio' value={direccion}
                            onChange={(e) => setDireccion(e.target.value)} required />
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700"> telefono </label>
                        <input nombre="telefono" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                        type="text" placeholder='Ingrese su telefono' value={telefono}
                            onChange={(e) => setTelefono(e.target.value)} required />
                    </div>
                    <button type='submit' className='w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Registro</button>
                </form>
                <p className='mt-6 text-sm text-center text-gray-600 hover:text-blue-500'></p>
            </div>
        </div>
    )
}

export default Registrar;