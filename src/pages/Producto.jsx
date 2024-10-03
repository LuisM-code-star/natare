import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductoDetalle() {
    const navigate = useNavigate();

    return (
        <main>
        <div className="producto-detalle">
            {/* Imagen del Producto */}
            <div className="producto-imagen">
            <img src="/src/assets/accesorios/goggle.jpg" alt="Goggles de Natación" />
            </div>
            {/* Información del Producto */}
            <div className="producto-info">
            <h1>Goggles de Natación</h1>
            <p>Precio: $320.00</p>
            <button onClick={() => navigate('/carrito')}>Agregar al Carrito</button>
            </div>
        </div>
        {/* Sección de Comentarios y Calificaciones */}
        <section className="comentarios">
            <h2>Comentarios y Calificaciones</h2>
            {/* Comentarios */}
            {/* ... */}
        </section>
        {/* Más Productos */}
        <aside className="mas-productos">
            <h2>Más Productos</h2>
            {/* Lista de más productos */}
            {/* ... */}
        </aside>
        </main>
    );
}

export default ProductoDetalle;
