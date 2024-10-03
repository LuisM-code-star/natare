import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
    return (
        <header>
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                <Link to="/">
                    <img src="/src/assets/natare.png" alt="Natare Logo" />
                </Link>
                </div>

                {/* Barra de Búsqueda */}
                <div className="search-bar">
                <input type="text" placeholder="Buscar" />
                </div>

                {/* Menú de Navegación */}
                <ul className="menu">
                <li className="menu-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="menu-item dropdown">
                    <span className="nav-link">Categorías</span>
                    <ul className="dropdown-content">
                    <li><Link to="/ropa" className="nav-link">Ropa</Link></li>
                    <li><Link to="/calzado" className="nav-link">Calzado</Link></li>
                    <li><Link to="/accesorios" className="nav-link">Accesorios</Link></li>
                    </ul>
                </li>
                <li className="menu-item">
                    <Link to="/natacion" className="nav-link">Natación</Link>
                </li>
                <li className="menu-item">
                    <Link to="/nosotros" className="nav-link">Nosotros</Link>
                </li>
                </ul>

                {/* Opciones de Usuario */}
                <div className="user-options">
                {/* Iniciar Sesión / Registrarse */}
                <Link to="/registro-usuario" className="login-register">Iniciar sesión/Regístrate</Link>

                {/* Menú de Usuario */}
                <div className="user-menu">
                    <img src="/src/assets/user.png" alt="Usuario" className="user-icon" />
                    <ul className="user-dropdown">
                    <li><Link to="/perfil-usuario" className="nav-link">Perfil de Usuario</Link></li>
                    <li><Link to="/historial-compras" className="nav-link">Historial de Compras</Link></li>
                    </ul>
                </div>

                {/* Icono del Carrito */}
                <div className="cart">
                    <Link to="/carrito">
                    <img src="/src/assets/cart.png" alt="Carrito" />
                    </Link>
                </div>
                </div>
            </nav>
    </header>
    )
}
    
export default HeaderNav