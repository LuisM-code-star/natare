import React from 'react';
import ProductItem from '../components/ProductItem';

function Calzado() {
    return (
        <main>
        <h1>Calzado</h1>
        <div className="product-grid">
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/calzado/sandalia.jpg"
            alt="Sandalia Azul"
            nombre="Sandalia Azul"
            precio="650.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/calzado/zapatoacuatico.avif"
            alt="Zapato Acuático Azul"
            nombre="Zapato Acuático Azul"
            precio="500.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/calzado/sandalia2.jfif"
            alt="Sandalia Negra"
            nombre="Sandalia Negra"
            precio="650.00"
            />
            <ProductItem
            link="/producto-detalle"
            imagen="/src/assets/calzado/zapatoacuatico2.jfif"
            alt="Zapato Acuático Negro"
            nombre="Zapato Acuático Negro"
            precio="500.00"
            />
        </div>
        </main>
    );
}

export default Calzado;
