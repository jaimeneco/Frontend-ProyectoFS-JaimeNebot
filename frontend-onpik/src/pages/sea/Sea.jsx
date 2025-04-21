import './Sea.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Carrusel } from '../../components/carrusel/Carrusel';
import { TituloSea } from '../../components/tituloAnimado/TituloSea';

export const Sea = () => {
    const images = [
        "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+1",
        "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+2",
        "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+3",
        "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+4",
        "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+5"
    ];
    return (
        <>
            <Header />
            <main>
                <div className='Main-content'>
                    <div className='Content-left'>
                        <TituloSea />
                    </div>
                </div>
                <div className='Main-carrusel'>
                    <p className='Carrusel-text'>¡Descubre todos nuestros productos!</p>
                    <Carrusel images={images} autoPlay={false} />
                </div>
                <div className='Main-productos'>
                    <p className='Productos-text'>Surfboard</p>
                    <div className='Productos-img'></div>
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />

                    <p className='Productos-text'>Kitesurf</p>
                    <div className='Productos-img'>
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    </div>

                    <p className='Productos-text'>Equipamiento y accesorios</p>
                    <div className='Productos-img'>
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                        <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    </div>

                </div>
            </main>
            <Footer />
        </>

    );
}