import { useState, useEffect } from "react";
import './carrusel.css';

// const imageList = [
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+1",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+2",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+3",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+4",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+5"
//         ]

export const Carrusel = ({ images, autoPlay=false }) => {

    const [idx, setIdx] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect( ()=> {
        console.log("useEffect");
        if(!autoPlay || isPaused) return;

        const idx = setInterval( ()=> {
            handleNext();
        },1000);

        return() => {
            clearInterval(idx)
        }

    }, [idx, autoPlay]);
    
    // Botón Prev:
    const handlePrev = () => {
        const prevIndice = (idx === 0) ? images.length - 1 : idx - 1;
        setIdx(prevIndice);
    }

    //Botón Next:
    const handleNext = () => {
        const sigIndice = (idx === images.length -1) ? 0 : idx + 1;
        setIdx(sigIndice);
    }

    //Indicadores:
    const handleGoToSlide = (idx) => {
        setIdx(idx);
    }


    return (
        // onMouseEnter={} onMouseLeave={}
        <div className="carrusel" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>

            <div className="carrusel-container" style={{ transform: `translateX(-${idx * 100}%)`}}>
                {
                    images.map( (image, idx) => (
                        <div className="carrusel-slide" key={idx}>
                            <img src={image} alt={`imagen ${idx+1}`} />
                        </div>
                    ))
                }
            </div>
            <div className="carrusel-controls">
                <button className="carrusel-btnPrev" onClick={handlePrev}>Anterior</button>
                <button className="carrusel-btnNext"onClick={handleNext}>Siguiente</button>
            </div>
            <div className="carrusel-indicators">
                {images.map ( (image, idx) =>(
                    <button key={idx}
                        onClick={()=> handleGoToSlide(idx)}
                        >{idx+1}</button>

                )   )}
            
            </div>
        </div>
            );
}