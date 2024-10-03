import React from 'react';
import ProductItem from '../components/ProductItem';

function Accesorios() {
    return (
        <main>
        <h1>Accesorios</h1>
        <div className="product-grid">
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/accesorios/paletas.jfif"
            alt="Paletas"
            nombre="Paletas"
            precio="250.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/accesorios/gorro.avif"
            alt="Gorro"
            nombre="Gorro"
            precio="280.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/accesorios/goggle.jpg"
            alt="Goggles"
            nombre="Goggles"
            precio="320.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/accesorios/aletas.avif"
            alt="Aletas"
            nombre="Aletas"
            precio="550.00"
            />
        </div>
        </main>
    );
}

export default Accesorios;
