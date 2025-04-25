import React, { useState, useEffect } from 'react';
import './Carrusel.css';

export function Carrusel() {
    const products = [
    { id: 1, title: 'Tabla Surf Alpha', marca: 'Quiksilver', type: 'surf', price: '20€/día', img: './src/public/imgs/img-kite-1.png' },
    { id: 2, title: 'Tabla Surf WaveX', marca: 'Billabong', type: 'surf', price: '22€/día', img: './src/public/imgs/img-kite-2.png' },
    { id: 3, title: 'Tabla Surf Flow',   marca: 'Rip Curl',    type: 'surf', price: '18€/día', img: './src/public/imgs/img-kite-3.png' },
    { id: 4, title: 'Tabla Surf Oceanic', marca: 'Hurley',      type: 'surf', price: '21€/día', img: './src/public/imgs/img-kite-4.png' },
    { id: 5, title: 'Tabla Surf Hydra',   marca: "O'Neill",    type: 'surf', price: '19€/día', img: './src/public/imgs/img-kite-5.png' },
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


// import { useState, useEffect } from "react";
// import './carrusel.css';

// // const imageList = [
// //     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+1",
// //     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+2",
// //     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+3",
// //     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+4",
// //     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+5"
// //         ]

// export const Carrusel = ({ images, autoPlay=false }) => {

//     const [idx, setIdx] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);

//     useEffect( ()=> {
//         console.log("useEffect");
//         if(!autoPlay || isPaused) return;

//         const idx = setInterval( ()=> {
//             handleNext();
//         },1000);

//         return() => {
//             clearInterval(idx)
//         }

//     }, [idx, autoPlay]);
    
//     // Botón Prev:
//     const handlePrev = () => {
//         const prevIndice = (idx === 0) ? images.length - 1 : idx - 1;
//         setIdx(prevIndice);
//     }

//     //Botón Next:
//     const handleNext = () => {
//         const sigIndice = (idx === images.length -1) ? 0 : idx + 1;
//         setIdx(sigIndice);
//     }

//     //Indicadores:
//     const handleGoToSlide = (idx) => {
//         setIdx(idx);
//     }


//     return (
//         // onMouseEnter={} onMouseLeave={}
//         <div className="carrusel" 
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}>

//             <div className="carrusel-container" style={{ transform: `translateX(-${idx * 100}%)`}}>
//                 {
//                     images.map( (image, idx) => (
//                         <div className="carrusel-slide" key={idx}>
//                             <img src={image} alt={`imagen ${idx+1}`} />
//                         </div>
//                     ))
//                 }
//             </div>
//             <div className="carrusel-controls">
//                 <button className="carrusel-btnPrev" onClick={handlePrev}>Anterior</button>
//                 <button className="carrusel-btnNext"onClick={handleNext}>Siguiente</button>
//             </div>
//             <div className="carrusel-indicators">
//                 {images.map ( (image, idx) =>(
//                     <button key={idx}
//                         onClick={()=> handleGoToSlide(idx)}
//                         >{idx+1}</button>

//                 )   )}
            
//             </div>
//         </div>
//             );
// }