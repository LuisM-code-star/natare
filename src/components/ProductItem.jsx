import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ link, imagen, alt, nombre, precio }) {
    return (
        <div className="product-item">
        <Link to={link}>
            <img src={imagen} alt={alt} />
            <h3>{nombre}</h3>
            <p>${precio}</p>
        </Link>
        </div>
    );
}

export default ProductItem;