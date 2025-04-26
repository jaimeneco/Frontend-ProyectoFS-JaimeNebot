// import React, { useState, useEffect } from 'react';
// import './Carrusel.css';

// export function Carrusel() {
//     const [products, setProducts] = useState([]);
//     const [current, setCurrent] = useState(0);

//     const API_URL = 'http://localhost:3000/api/v1'; // Ajusta según tu servidor

//     useEffect(() => {
//         // Fetch a tu backend para traer los productos
//         fetch(`${API_URL}/productos`) // <-- Este endpoint te debe devolver los productos
//             .then(res => res.json())
//             .then(data => {
//                 setProducts(data); // Guarda los productos recibidos
//             })
//             .catch(error => {
//                 console.error('Error cargando productos:', error);
//             });
//     }, []);

//     const handlePrev = () => {
//         setCurrent(prev => (prev - 1 + products.length) % products.length);
//     };

//     const handleNext = () => {
//         setCurrent(prev => (prev + 1) % products.length);
//     };

//     useEffect(() => {
//         const onKeyDown = e => {
//             if (e.key === 'ArrowLeft') handlePrev();
//             if (e.key === 'ArrowRight') handleNext();
//         };
//         window.addEventListener('keydown', onKeyDown);
//         return () => window.removeEventListener('keydown', onKeyDown);
//     }, [products.length]);

//     return (
//         <div className="Carrusel">
//             <div className="Carrusel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
//                 {products.map(prod => (
//                     <div key={prod._id} className="Carrusel-slide">
//                         <div className="Carrusel-img">
//                             <img src={prod.imagenUrl} alt={prod.title} loading="lazy" />
//                             <div className="Carrusel-text">
//                                 <h3>{prod.title}</h3>
//                                 <p>{prod.marca}</p>
//                                 <p>{prod.price}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button className="Nav-button prev" onClick={handlePrev} aria-label="Anterior">
//                 &#10094;
//             </button>
//             <button className="Nav-button next" onClick={handleNext} aria-label="Siguiente">
//                 &#10095;
//             </button>
//         </div>
//     );
// }




import React, { useState, useEffect } from 'react';
import './Carrusel.css';

export function Carrusel() {
    const products = [
    { id: 1, title: 'Tabla Surf Alpha', marca: 'Quiksilver', type: 'surf', price: '20€/día', img: '/imgs/img-kite-1.png' },
    { id: 2, title: 'Tabla Surf WaveX', marca: 'Billabong', type: 'surf', price: '22€/día', img: '/imgs/img-kite-2.png' },
    { id: 3, title: 'Tabla Surf Flow',   marca: 'Rip Curl',    type: 'surf', price: '18€/día', img: '/imgs/img-kite-3.png' },
    { id: 4, title: 'Tabla Surf Oceanic', marca: 'Hurley',      type: 'surf', price: '21€/día', img: '/imgs/img-kite-4.png' },
    { id: 5, title: 'Tabla Surf Hydra',   marca: "O'Neill",    type: 'surf', price: '19€/día', img: '/imgs/img-kite-5.png' },
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


