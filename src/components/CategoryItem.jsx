import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({ link, imagen, alt, nombre }) {
    return (
        <div className="category-item">
        <Link to={link}>
            <img src={imagen} alt={alt} />
            <h3>{nombre}</h3>
        </Link>
        </div>
    );
}

export default CategoryItem;
