import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { CarruselMountain } from '../../components/carrusel/CarruselMountain';
import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Mountain.css';

const API_URL = import.meta.env.VITE_API_URL;
const API_ROUTER = import.meta.env.VITE_API_ROUTER;

export const Mountain = () => {
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

    const productosMountain = productos.filter(
        prod => prod.type?.toLowerCase() === 'mountain'
    );

    return (
        <>
            <Header />
            <main className='Main-mountain'>
                <div className='Main-content'>
                    <div className='Content-left'>
                        <TituloMountain />
                    </div>
                </div>

                <div className='Main-carrusel'>
                    <p className='Carrusel-title'>
                        EN LA MONTAÑA... <br /> ¡SIEMPRE BIEN EQUIPADO!
                    </p>
                    <CarruselMountain autoPlay={false} />
                </div>

                <section className="Productos-section">
                    <h2>Productos disponibles</h2>
                    <div className="Productos-grid">
                        {productosMountain.length > 0 ? (
                            productosMountain.map((prod) => (
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
                            <p>No hay productos de montaña disponibles.</p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
