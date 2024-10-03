import React from 'react';
import ProductItem from '../components/ProductItem';

function Ropa() {
    return (
        <main>
        <h1>Ropa</h1>
        <div className="product-grid">
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/ropa/camisahombre.jpg"
            alt="Camisa Hombre"
            nombre="Camisa Hombre"
            precio="650.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/ropa/camisamujer.jpg"
            alt="Camisa Mujer"
            nombre="Camisa Mujer"
            precio="650.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/ropa/trajeninos.jpg"
            alt="Traje Niño"
            nombre="Traje Niño"
            precio="350.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/ropa/trajemujer1.jpg"
            alt="Traje Acuático Mujer"
            nombre="Traje Acuático Mujer"
            precio="850.00"
            />
        </div>
        </main>
    );
}

export default Ropa;
