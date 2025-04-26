import React, { useEffect, useRef } from 'react';
import './TituloAnimado.css'; // Asegúrate de tener la clase .aparece en tu CSS

export const TituloMountain = () => {
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
            <img src='public/imgs/img-moun-sea/img-mountain.jpg' alt="Fondo montaña" className="Img-mountain" />
            <h1 ref={tituloRef} className="TituloAnimado-mountain">
                VIVE CON NOSOTROS <br/> TODA  LA EMOCIÓN <br/> DE LA MONTAÑA...
            </h1>
        </div>
    );
};