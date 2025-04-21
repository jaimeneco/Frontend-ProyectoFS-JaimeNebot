import React, { useEffect, useRef } from 'react';
import './TituloAnimado.css';

export const TituloSea = () => {
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
        <div className="Contenedor-imagen">
            <img src='./src/public/imgs/img-sea.jpg' alt="Fondo mar" className="Img-sea" />
            <h1 ref={tituloRef} className="TituloAnimado-sea">
                CON ONPIK DISFRUTARÁS <br/> COMO NUNCA DE TU <br/> TIEMPO EN EL AGUA...
            </h1>
        </div>
    );
};