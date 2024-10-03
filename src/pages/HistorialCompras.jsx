// HistorialCompras.jsx
import React from 'react';

function HistorialCompras() {
    return (
        <main>
        <h1>Historial de Compras</h1>
        <div className="historial-compras">
            {/* Producto 1 */}
            <div className="historial-item">
            <img src="/src/assets/accesorios/goggle.jpg" alt="Goggles de Natación" />
            <div className="historial-info">
                <h3>Goggles de Natación</h3>
                <p>Comprado el: 01/10/2023</p>
                <p>Fecha de llegada estimada: 05/10/2023</p>
            </div>
            </div>
            {/* Más productos */}
        </div>
        </main>
    );
}

export default HistorialCompras;
