import React, { useState, useEffect } from 'react';
import './Carrusel.css';

export function CarruselMountain() {
    const products = [
    { id: 1, title: 'Skis nieve Alpha', marca: 'Quiksilver', type: 'surf', price: '20€/día', img: '/imgs/img-productos/img-ski/img-ski-3.png' },
    { id: 2, title: 'Tabla Snow WaveX', marca: 'Billabong', type: 'snow', price: '22€/día', img: '/imgs/img-productos/img-snow/img-snow-1.png' },
    { id: 3, title: 'Casco Flow',   marca: 'Rip Curl',    type: 'kite', price: '18€/día', img: '/imgs/img-productos/img-equipMoun/img-equipMon-1.png' },
    { id: 4, title: 'Skis nieve Oceanic', marca: 'Hurley',      type: 'ski', price: '21€/día', img: '/imgs/img-productos/img-ski/img-ski-1.png' },
    { id: 5, title: 'Tabla Snow Hydra',   marca: "O'Neill",    type: 'equip', price: '19€/día', img: '/imgs/img-productos/img-snow/img-snow-2.png' },
    ];

        const [current, setCurrent] = useState(0);

    const handlePrev = () => {
    setCurrent(prev => (prev - 1 + products.length) % products.length);
    };

    const handleNext = () => {
    setCurrent(prev => (prev + 1) % products.length);
    };

    useEffect(() => {
    const onKeyDown = e => {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
    <div className="Carrusel">
      <div className="Carrusel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {products.map(prod => (
            <div key={prod.id} className="Carrusel-slide">
            <div className="Carrusel-img">
                <img src={prod.img} alt={prod.title} loading="lazy" />
                <div className="Carrusel-text">
                <h3>{prod.title}</h3>
                <p>{prod.marca}</p>
                <p>{prod.price}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
        <button className="Nav-button prev" onClick={handlePrev} aria-label="Anterior">
        &#10094;
        </button>
        <button className="Nav-button next" onClick={handleNext} aria-label="Siguiente">
        &#10095;
        </button>
    </div>
);
}