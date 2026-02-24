import './Sea.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { CarruselSea } from '../../components/carrusel/CarruselSea';
import { TituloSea } from '../../components/tituloAnimado/TituloSea';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;
const API_ROUTER = import.meta.env.VITE_API_ROUTER;

export const Sea = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await fetch(`${API_URL}${API_ROUTER}/productos`);
                const data = await res.json();
                setProductos(data.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []);

    const productosSea = productos.filter(
        prod => prod.type?.toLowerCase() === 'sea'
    );

    return (
        <>
            <Header />
            <main className='Main-sea'>
                <div className='Main-content'>
                    <div className='Content-left'>
                        <TituloSea />
                    </div>
                </div>

                <div className='Main-carrusel'>
                    <p className='Carrusel-title'>TODO LO NECESARIO <br /> PARA METERTE <br />AL AGUA</p>
                    <CarruselSea autoPlay={false} />
                </div>

                <section className="Productos-section">
                    <h2>Productos disponibles</h2>
                    <div className="Productos-grid">
                        {productosSea.length > 0 ? (
                            productosSea.map((prod) => (
                                <Link to={`/producto/${prod._id}`} key={prod._id} className="Producto-card-link">
                                    <div className="Producto-card">
                                        <img src={prod.img} alt={prod.title} />
                                        <h3>{prod.title}</h3>
                                        <p>{prod.description}</p>
                                        <p className="Price">{prod.price} €/día</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No hay productos de mar disponibles.</p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};