import React from 'react';
import { useNavigate } from 'react-router-dom';

function Carrito() {
    const navigate = useNavigate();

    return (
        <main>
        <h1>Carrito de Compras</h1>
        <div className="carrito">
            {/* Producto en el carrito */}
            <div className="carrito-item">
            <img src="/src/assets/accesorios/goggle.jpg" alt="Goggles de Natación" />
            <div className="carrito-info">
                <h3>Goggles de Natación</h3>
                <p>Precio: $320.00</p>
                <p>Cantidad: 1</p>
            </div>
            </div>
            {/* Más productos en el carrito */}
            {/* Total */}
            <div className="carrito-total">
            <h3>Total: $320.00</h3>
            <button onClick={() => navigate('/confirmacion')}>Proceder al Pago</button>
            </div>
        </div>
        </main>
    );
}

export default Carrito;
