import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { CarruselMountain } from '../../components/carrusel/CarruselMountain';
import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Mountain.css'; // Asegúrate de que este archivo tenga estilos para .Producto-card-link

export const Mountain = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/v1/productos'); 
                const data = await res.json();
                setProductos(data.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []);

    const productosMountain = productos.filter(prod => prod.type === "Mountain");

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


// import './Mountain.css';
// import { Header } from '../../components/header/Header';
// import { Footer } from '../../components/footer/Footer';
// import { CarruselMountain } from '../../components/carrusel/CarruselMountain';
// import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';
// import { useEffect, useState } from 'react';

// export const Mountain = () => {
//     const [productos, setProductos] = useState([]);

//     useEffect(() => {
//         const fetchProductos = async () => {
//             try {
//                 const res = await fetch('http://localhost:3000/api/v1/productos'); 
//                 const data = await res.json();
//                 setProductos(data.data); // Guardamos el array completo
//             } catch (error) {
//                 console.error('Error al obtener productos:', error);
//             }
//         };

//         fetchProductos();
//     }, []);

//     // Filtrar productos por type "Mountain"
//     const productosMountain = productos.filter(prod => prod.type === "Mountain");

//     return (
//         <>
//             <Header />
//             <main className='Main-mountain'>
//                 <div className='Main-content'>
//                     <div className='Content-left'>
//                         <TituloMountain />
//                     </div>
//                 </div>

//                 <div className='Main-carrusel'>
//                     <p className='Carrusel-title'>
//                         EN LA MONTAÑA... <br /> ¡SIEMPRE BIEN EQUIPADO!
//                     </p>
//                     <CarruselMountain autoPlay={false} />
//                 </div>

//                 {/* Nueva sección: Productos */}
//                 <section className="Productos-section">
//                     <h2>Productos disponibles</h2>
//                     <div className="Productos-grid">
//                         {productosMountain.length > 0 ? (
//                             productosMountain.map((prod) => (
//                                 <div key={prod._id} className="Producto-card">
//                                     <img src={prod.img} alt={prod.title} />
//                                     <h3>{prod.title}</h3>
//                                     <p>{prod.description}</p>
//                                     <p className="Price">{prod.price} €/día</p>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No hay productos de montaña disponibles.</p>
//                         )}
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </>
//     );
// };

