import './Mountain.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Carrusel } from '../../components/carrusel/Carrusel';
import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';
import { useState, useEffect } from 'react';

export const Mountain = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://backend-proyecto-fs-jaime-nebot-a9ga1sgro.vercel.app/api/v1/productos')
            .then(res => res.json())
            .then(data => {
                setProducts(data.productos);  // Guarda todos los productos
            })
            .catch(error => {
                console.error('Error cargando productos:', error);
            });
    }, []);

    const snowboardProducts = Array.isArray(products) ? products.slice(0, 5) : [];
    const skiProducts = Array.isArray(products) ? products.slice(5, 10) : [];
    const equipamientoProducts = Array.isArray(products) ? products.slice(10, 15) : [];

    const imagesForCarrusel = Array.isArray(products) ? products.map(product => product.img) : [];

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
                    <p className='Carrusel-title'>EN LA MONTAÑA... <br /> ¡SIEMPRE BIEN EQUIPADO!</p>
                    <Carrusel images={imagesForCarrusel} autoPlay={false} />
                </div>
                <div id='snow' className='Main-productos'>
                    <p className='Productos-text'>Snowboard:</p>
                    <div className='Productos-img'>
                        {snowboardProducts.map((prod) => (
                            <img key={prod._id} src={prod.img} alt={prod.title} loading="lazy" />
                        ))}
                    </div>

                    <p className='Productos-text'>Ski:</p>
                    <div className='Productos-img'>
                        {skiProducts.map((prod) => (
                            <img key={prod._id} src={prod.img} alt={prod.title} loading="lazy" />
                        ))}
                    </div>

                    <p className='Productos-text'>Equipamiento y accesorios:</p>
                    <div className='Productos-img'>
                        {equipamientoProducts.map((prod) => (
                            <img key={prod._id} src={prod.img} alt={prod.title} loading="lazy" />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}



// import './Mountain.css';
// import { Header } from '../../components/header/Header'
// import { Footer } from '../../components/footer/Footer'
// import { Carrusel } from '../../components/carrusel/Carrusel';
// import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';
// import { useState, useEffect } from 'react';

// export const Mountain = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/api/v1/productos')
//             .then(res => res.json())
//             .then(data => {
//                 const imageUrls = data.productos.map(product => product.img);
//                 setImages(imageUrls);
//             })
//             .catch(error => {
//                 console.error('Error cargando productos:', error);
//             });
//     }, []);

//     // useEffect(() => {
//     //     fetch('http://localhost:3000/api/v1/productos')
//     //         .then(res => res.json())
//     //         .then(data => {
//     //             // Transformar los productos a solo un array de imágenes
//     //             const imageUrls = data.map(product => product.img);
//     //             setImages(imageUrls);
//     //         })
//     //         .catch(error => {
//     //             console.error('Error cargando productos:', error);
//     //         });
//     // }, []);

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
//                     <p className='Carrusel-title'>EN LA MONTAÑA... <br /> ¡SIEMPRE BIEN EQUIPADO!</p>
//                     <Carrusel images={images} autoPlay={false} />
//                 </div>
//                 <div id='snow' className='Main-productos'>
//                     <p className='Productos-text' >Snowboard:</p>
//                     <div className='Productos-img'></div>

//                     <p className='Productos-text'>Ski:</p>
//                     <div className='Productos-img'></div>

//                     <p className='Productos-text'>Equipamiento y accesorios:</p>
//                     <div className='Productos-img'></div>
//                 </div>
//             </main >
//             <Footer />
//         </>
//     );
// }


// OPCIÖN SIN FECTH (1ª)
// import './Mountain.css';
// import { Header } from '../../components/header/Header'
// import { Footer } from '../../components/footer/Footer'
// import { Carrusel } from '../../components/carrusel/Carrusel';
// import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';

// export const Mountain = () => {
//     const images = [
//         "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+1",
//         "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+2",
//         "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+3",
//         "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+4",
//         "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+5"
//     ];
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
//                     <p className='Carrusel-title'>EN LA MONTAÑA... <br /> ¡SIEMPRE BIEN EQUIPADO!</p>
//                     <Carrusel images={images} autoPlay={false} />
//                 </div>
//                 <div id='snow' className='Main-productos'>
//                     <p className='Productos-text' >Snowboard:</p>
//                     <div className='Productos-img'>
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                     </div>
//                     <p className='Productos-text'>Ski:</p>
//                     <div className='Productos-img'>
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                     </div>

//                     <p className='Productos-text'>Equipamiento y accesorios:</p>
//                     <div className='Productos-img'>
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                         <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
//                     </div>

//                 </div>
//             </main>
//             <Footer />
//         </>

//     );
// }