// Nosotros.jsx
import React from 'react';

function Nosotros() {
    return (
        <main>
        <div className="nosotros-contenido">
            <div className="row">
            <div className="col-3 ejemplo">
                {/* Imagen del logo con clase específica */}
                <img src="/src/assets/natare.png" alt="Natare" className="img-pequena" />
                <p><i>Nada con confianza, nada con nosotros. Expertos en equipamiento de natación.</i></p>
            </div>

            <div className="col-9 ejemplo">
                <h2>Misión</h2>
                <p className="nosotros-texto">
                Facilitar y potenciar la experiencia de natación de nuestros clientes ofreciendo productos de alta calidad, innovadores y seguros que les ayuden a alcanzar sus objetivos deportivos y disfrutar al máximo de su práctica en el agua. Nos comprometemos a brindar un servicio excepcional, orientado hacia la satisfacción del cliente y la promoción de un estilo de vida activo y saludable.
                </p>
            </div>
            </div>

            <div className="row">
            <div className="col-4 ejemplo">
                {/* Imagen de "Nosotros" con clase específica */}
                <img src="/src/assets/nosotros.jpg" alt="Nosotros" className="img-pequena" />
            </div>

            <div className="col-8 ejemplo">
                <h2>Visión</h2>
                <p className="nosotros-texto">
                Ser reconocidos como el referente líder en la industria de productos para natación, destacándonos por nuestra innovación constante, excelencia en calidad y compromiso con la comunidad de nadadores en todo el mundo. Aspiramos a inspirar y apoyar a personas de todas las edades y niveles de habilidad a través de nuestra amplia gama de productos y servicios, convirtiéndonos en la opción preferida para quienes buscan equipamiento confiable y de vanguardia para su práctica acuática.
                </p>
            </div>
            </div>

            <div className="row">
            <div className="col-3 ejemplo">
                {/* Contenedores para imágenes de valores */}
                <div className="contenedor-imagen">
                <img src="/src/assets/calidad.jfif" alt="Calidad" className="img-pequena" />
                </div>
                <div className="contenedor-imagen">
                <img src="/src/assets/innovacion.jpg" alt="Innovación" className="img-pequena" />
                </div>
            </div>

            <div className="col-9 ejemplo">
                <h2>Valores</h2>
                <ol className="nosotros-texto">
                <li><strong>Calidad:</strong> Nos comprometemos a ofrecer productos de la más alta calidad, fabricados con materiales duraderos y tecnologías avanzadas que garanticen el rendimiento y la seguridad de nuestros clientes en el agua.</li>
                <li><strong>Innovación:</strong> Buscamos constantemente la innovación en el diseño y la funcionalidad de nuestros productos, anticipando las necesidades de los nadadores y proporcionando soluciones creativas que mejoren su experiencia en el agua.</li>
                <li><strong>Integridad:</strong> Actuamos con honestidad, transparencia y ética en todas nuestras operaciones, manteniendo la confianza de nuestros clientes, empleados y socios comerciales en cada interacción.</li>
                <li><strong>Compromiso con el cliente:</strong> Nos esforzamos por superar las expectativas de nuestros clientes, brindando un servicio personalizado, atención al detalle y una respuesta ágil a sus necesidades y sugerencias.</li>
                <li><strong>Pasión por el deporte:</strong> Compartimos y promovemos la pasión por la natación y el bienestar físico, fomentando un ambiente de motivación, entusiasmo y camaradería entre nuestra comunidad de clientes y empleados.</li>
                </ol>
            </div>
            </div>

            <div className="row">
            <div className="col-12 ejemplo">
                <h2 id="contacto">Contacto</h2>
                <p className="nosotros-texto">Av. Mar Egeo #2879 Col. Americana, Guadalajara, Jalisco</p>
                <p className="nosotros-texto">
                <a className="contacto" href="mailto:natare@natare.com">Envíanos un correo</a><br />
                <a className="contacto" href="tel:+523338009000">Tel. +52 333 800 9000</a>
                </p>
            </div>
            </div>
        </div>
        </main>
    );
}

export default Nosotros;
