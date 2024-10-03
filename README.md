# Natare - Tienda en Línea de Equipamiento de Natación

¡Bienvenido a **Natare**! Este es un proyecto de desarrollo web que consiste en una tienda en línea especializada en productos y equipamiento para natación. A lo largo de este proyecto, hemos construido una plataforma que permite a los usuarios explorar productos, conocer más sobre la natación y realizar compras de manera sencilla y eficiente.

## Descripción del Proyecto

El proyecto se ha desarrollado en varias etapas, comenzando desde una página web sencilla hasta una aplicación más compleja utilizando React. A continuación, se detallan las etapas del desarrollo:

### 1. Versión Inicial: Página Sencilla

Comenzamos con una página web simple que presentaba información básica sobre la tienda y algunos productos destacados. Esta versión sirvió como punto de partida para establecer la estructura general y el diseño inicial.

### 2. Desarrollo de la Base Completa en HTML

En la segunda etapa, ampliamos la página inicial para construir una base completa en HTML. Incluimos varias secciones y páginas adicionales, tales como:

- **Página de Inicio**: Con productos destacados y categorías populares.
- **Detalle de Producto**: Información detallada de cada producto.
- **Carrito de Compras**: Funcionalidad para agregar y visualizar productos en el carrito.
- **Registro y Perfil de Usuario**: Formulario de registro y página de perfil del usuario.
- **Historial de Compras**: Visualización de compras anteriores.
- **Páginas Informativas**: Secciones sobre la historia de la natación, técnicas y beneficios para la salud.
- **Página "Nosotros"**: Información sobre la misión, visión y valores de la empresa, así como datos de contacto.

### 3. Migración a React

En la etapa actual, hemos migrado el proyecto a **React**, lo que nos permite crear una aplicación más dinámica y modular. La migración incluye:

- **Componentización**: Creación de componentes reutilizables para productos, categorías, encabezado, pie de página, etc.
- **Enrutamiento**: Implementación de `react-router-dom` para manejar la navegación entre páginas sin recargar.
- **Manejo de Estado**: Uso de Hooks como `useState` y `useEffect` para manejar el estado y efectos secundarios.
- **Interactividad Mejorada**: Mejora en la experiencia del usuario con interacciones más fluidas y responsivas.

## Tecnologías Utilizadas

- **HTML5 y CSS3**: Para la estructura y el estilo inicial de las páginas.
- **JavaScript ES6+**: Añadiendo interactividad y funcionalidad básica.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Para el enrutamiento de la aplicación.
- **Vite**: Herramienta de desarrollo para crear aplicaciones React de manera eficiente.

## Instalación y Configuración

Para ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/natare.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd natare
   ```

3. **Instala las dependencias**:

   ```bash
   npm install
   ```

4. **Inicia la aplicación**:

   ```bash
   npm run dev
   ```

5. **Abre tu navegador web** y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables de React (ProductItem, CategoryItem, Header, etc.).
  - **pages/**: Componentes de página (Home, Producto, Carrito, PerfilUsuario, etc.).
  - **assets/**: Recursos estáticos como imágenes y estilos CSS.
  - **App.jsx**: Componente raíz de la aplicación.
  - **index.jsx**: Punto de entrada de la aplicación.
- **public/**: Archivos estáticos públicos.
- **package.json**: Archivo de configuración de npm con las dependencias y scripts.

## Funcionalidades Clave

- **Navegación Dinámica**: Gracias a React Router, los usuarios pueden navegar entre diferentes secciones sin recargar la página.
- **Componentes Reutilizables**: Uso de componentes para productos y categorías que facilitan la escalabilidad y mantenibilidad del código.
- **Estado Compartido**: Aunque en esta versión inicial no se ha implementado un estado global, la estructura permite incorporar herramientas como Context API o Redux en el futuro.

## Próximos Pasos

- **Manejo de Datos Dinámicos**: Integrar una API o base de datos para obtener y manejar datos de productos y usuarios de forma dinámica.
- **Autenticación de Usuarios**: Implementar un sistema de registro e inicio de sesión real.
- **Carrito de Compras Funcional**: Permitir a los usuarios agregar productos al carrito y procesar pedidos.
- **Mejoras en la Interfaz de Usuario**: Optimizar la experiencia de usuario con estilos y animaciones adicionales.
- **Responsive Design**: Asegurar que la aplicación se visualice correctamente en dispositivos móviles y tabletas.

## Contribuciones

Este es un proyecto de aprendizaje y cualquier contribución es bienvenida. Si deseas colaborar, por favor sigue estos pasos:

1. **Haz un fork del repositorio**.
2. **Crea una rama nueva** para tu funcionalidad o corrección de errores:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **Realiza tus cambios y haz commits**.
4. **Envía un pull request** para que tus cambios sean revisados e integrados.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Equipo 3

Hiram Agustín Acevedo López
Luis Fernando Moreno López