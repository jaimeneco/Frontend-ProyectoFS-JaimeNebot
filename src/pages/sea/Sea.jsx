import './Sea.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { CarruselSea } from '../../components/carrusel/CarruselSea';
import { TituloSea } from '../../components/tituloAnimado/TituloSea';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export const Sea = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/v1/productos');
                const data = await res.json();
                setProductos(data.data); // Guardamos el array completo
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []);

    // Filtrar productos por type "Sea"
    const productosMountain = productos.filter(prod => prod.type === "Sea");

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

                {/* Nueva sección: Productos */}
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