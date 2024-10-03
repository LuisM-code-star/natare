import React from 'react';
import ProductItem from '../components/ProductItem';
import CategoryItem from '../components/CategoryItem';

function Home() {
    const productosDestacados = [
        {
        id: 'goggles-de-natacion',
        link: '/producto-detalle',
        imagen: '/src/assets/accesorios/goggle.jpg',
        alt: 'Goggles de Natación',
        nombre: 'Goggles de Natación',
        precio: '320.00',
        },
        {
        id: 'traje-de-bano-mujer',
        link: '/producto-detalle',
        imagen: '/src/assets/ropa/trajemujer1.jpg',
        alt: 'Traje de Baño Mujer',
        nombre: 'Traje de Baño Mujer',
        precio: '850.00',
        },
        {
        id: 'sandalia-azul',
        link: '/producto-detalle',
        imagen: '/src/assets/calzado/sandalia.jpg',
        alt: 'Sandalia Azul',
        nombre: 'Sandalia Azul',
        precio: '650.00',
        },
        {
        id: 'gorro-de-natacion',
        link: '/producto-detalle',
        imagen: '/src/assets/accesorios/gorro.avif',
        alt: 'Gorro de Natación',
        nombre: 'Gorro de Natación',
        precio: '280.00',
        },
    ];

    const categoriasPopulares = [
        {
        id: 'ropa',
        link: '/ropa',
        imagen: '/src/assets/ropa/camisahombre.jpg',
        alt: 'Ropa',
        nombre: 'Ropa',
        },
        {
        id: 'calzado',
        link: '/calzado',
        imagen: '/src/assets/calzado/zapatoacuatico.avif',
        alt: 'Calzado',
        nombre: 'Calzado',
        },
        {
        id: 'accesorios',
        link: '/accesorios',
        imagen: '/src/assets/accesorios/aletas.avif',
        alt: 'Accesorios',
        nombre: 'Accesorios',
        },
    ];

    return (
        <main>
        {/* Productos Destacados */}
        <section className="featured-products">
            <h2>Productos Destacados</h2>
            <div className="product-grid">
            {productosDestacados.map((producto) => (
                <ProductItem
                key={producto.id}
                link={producto.link}
                imagen={producto.imagen}
                alt={producto.alt}
                nombre={producto.nombre}
                precio={producto.precio}
                />
            ))}
            </div>
        </section>

        {/* Categorías Populares */}
        <section className="popular-categories">
            <h2>Categorías Populares</h2>
            <div className="category-grid">
            {categoriasPopulares.map((categoria) => (
                <CategoryItem
                key={categoria.id}
                link={categoria.link}
                imagen={categoria.imagen}
                alt={categoria.alt}
                nombre={categoria.nombre}
                />
            ))}
            </div>
        </section>
        </main>
    );
}

export default Home;

    