import React, { useState, useEffect } from 'react';
import './Carrusel.css';

export function CarruselSea() {
    const [products, setProducts] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/v1/productos');
                const data = await res.json();
                const productosFiltrados = data.data.filter((prod) => prod.type === 'Sea');
                setProducts(productosFiltrados);
            } catch (error) {
                console.error('Error al obtener productos para el carrusel:', error);
            }
        };
        fetchProductos();
    }, []);

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
    }, [products]);

    if (products.length === 0) {
        return <p className="Carrusel-loading">Cargando productos...</p>;
    }

    return (
        <div className="Carrusel">
            <div 
                className="Carrusel-track" 
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {products.map(prod => (
                    <div key={prod._id} className="Carrusel-slide">
                        <div className="Carrusel-card">
                            <img className="Carrusel-img" src={prod.img} alt={prod.title} loading="lazy" />
                            <div className="Carrusel-info">
                                <h3>{prod.title}</h3>
                                <p>{prod.description}</p>
                                <p className="Carrusel-price">{prod.price} €</p>
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