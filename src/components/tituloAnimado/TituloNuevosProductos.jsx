import React, { useEffect, useRef } from 'react';
import './TituloAnimado.css'; // Asegúrate de tener la clase .aparece en tu CSS

export const TituloNuevosProductos = () => {
    const tituloRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (tituloRef.current) {
                tituloRef.current.classList.add('aparece');
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="Contenedor-img">
            <img src='/imgs/img-home/img-landingMore.jpg' alt="Img nuevos productos" className="Img-nuevos" />
            <h1 ref={tituloRef} className="TituloAnimado-nuevos">
                Más deportes próximamente...
            </h1>
        </div>
    );
};