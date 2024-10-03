// PerfilUsuario.jsx
import React from 'react';

function PerfilUsuario() {
    return (
        <main>
        <h1>Perfil de Usuario</h1>
        <div className="perfil">
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Correo Electrónico:</strong> juanperez@example.com</p>
            <p><strong>Dirección:</strong> Calle Falsa 123</p>
            <p><strong>Teléfono:</strong> +34 600 123 456</p>
            <p><strong>Fecha de Nacimiento:</strong> 15/05/1985</p>
            <p><strong>Método de Pago Preferido:</strong> Tarjeta de Crédito</p>
            {/* Otros datos de la cuenta */}
        </div>
        </main>
    );
}

export default PerfilUsuario;
