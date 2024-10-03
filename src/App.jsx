import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Natacion from './pages/natacion'
import Nosotros from './pages/nosotros'
import HeaderNav from './components/header'
import Accesorios from './pages/accesorios'
import Ropa from './pages/ropa'
import Calzado from './pages/calzado'
import ProductoDetalle from './pages/Producto'
import Carrito from './pages/carrito'
import Confirmacion from './pages/Confirmacion'
import HistorialCompras from './pages/HistorialCompras'
import PerfilUsuario from './pages/PerfilUsuario'
import RegistroUsuario from './pages/RegistroUsuario'

function App() {

  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/natacion" element={<Natacion />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/ropa" element={<Ropa />} />
        <Route path="/calzado" element={<Calzado />} />
        <Route path="/producto-detalle" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/historial-compras" element={<HistorialCompras />} />
        <Route path="/perfil-usuario" element={<PerfilUsuario />} />
        <Route path="/registro-usuario" element={<RegistroUsuario />} />
      </Routes>
    </>
  )
}

export default App
