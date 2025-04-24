import { useState } from "react";
import './Galeria.css';

export const GaleriaImagenes = () => {
    const [idx, setIdx] = useState(0);

    const listaImagenes = [
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Imagen+1",
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Imagen+2",
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Imagen+3",
    ];

    const handlePrev = () => {
        const prevIndice = (idx === 0) ? listaImagenes.length - 1 : idx - 1;
        setIdx(prevIndice);
    };

    const handleNext = () => {
        const sigIndice = (idx === listaImagenes.length - 1) ? 0 : idx + 1;
        setIdx(sigIndice);
    };

    return (
        <div className="galeria-wrapper">
            <h3 className="galeria-titulo">Galería de Imágenes</h3>

            <div className="galeria">
                <button className="galeria-btn galeria-btn-prev" onClick={handlePrev}>❮</button>

                <div className="galeria-slider">
                    <div
                        className="galeria-track"
                        style={{ transform: `translateX(-${idx * 100}%)` }}
                    >
                        {listaImagenes.map((src, i) => (
                            <img key={i} src={src} alt={`Imagen ${i + 1}`} className="galeria-img" />
                        ))}
                    </div>
                </div>

                <button className="galeria-btn galeria-btn-next" onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};