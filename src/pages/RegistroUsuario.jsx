// RegistroUsuario.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegistroUsuario() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar los datos del formulario
        // Por ahora, simplemente redirigimos a la página de inicio
        navigate('/');
    };

    return (
        <main>
        <h1>Registro de Usuario</h1>
        <form className="registro-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" required />

            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />

            <button type="submit">Registrarse</button>
        </form>
        </main>
    );
}

export default RegistroUsuario;
