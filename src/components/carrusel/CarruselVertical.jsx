import './CarruselVertical.css'
import { useEffect, useState, useRef } from "react";

const images = [
    "./imgs/img-productos/img-equipMoun/img-equipMon-1.png",
    "./imgs/img-productos/img-equipMoun/img-equipMon-2.png",
    "./imgs/img-productos/img-equipSea/img-equipMar-1.png",
    "./imgs/img-productos/img-equipSea/img-equipMar-4.png"
];

export default function CarruselVertical() {
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);
    const imageHeight = 1200;
    const totalImages = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prev) => prev + imageHeight);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (offset >= totalImages * imageHeight) {
            setTimeout(() => {
                containerRef.current.style.transition = "none";
                setOffset(0);
                requestAnimationFrame(() => {
                    containerRef.current.style.transition = "transform 0.5s ease-in-out";
                });
            }, 500);
        }
    }, [offset]);

    return (
        <div className="Carrusel-container">
            <div
                ref={containerRef}
                className="Carrusel-inner"
                style={{ transform: `translateY(-${offset}px)` }}
            >
                {[...images, ...images].map((src, i) => (
                    <img key={i} src={src} alt={`img-${i}`} className="Carrusel-img" />
                ))}
            </div>
        </div>
    );
}