import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Confirmacion() {
    const navigate = useNavigate();

    return (
        <main>
        <div className="confirmacion">
            <h1>¡Gracias por tu compra!</h1>
            <p>Tu pedido ha sido procesado exitosamente.</p>
            <p>
            Hemos enviado un correo de confirmación a tu dirección de email con los detalles de tu pedido.
            </p>
            <p>
            Número de pedido: <strong>#123456789</strong>
            </p>
            <p>
            Si tienes alguna pregunta, por favor contáctanos a través de nuestro{' '}
            <Link to="/nosotros#contacto">Centro de Ayuda</Link>.
            </p>
            <button onClick={() => navigate('/')}>Volver al Inicio</button>
        </div>
        </main>
    );
}

export default Confirmacion;
