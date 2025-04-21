import './Mountain.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Carrusel } from '../../components/carrusel/Carrusel';
import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';

export const Mountain = () => {
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
                        <TituloMountain/>
                    </div>
                </div>
                <div className='Main-carrusel'>
                    <p className='Carrusel-text'>¡Descubre todos nuestros productos!</p>
                    <Carrusel images={images} autoPlay={true} />
                </div>
                <div className='Main-productos'>
                    <p className='Productos-text'>Snowboard</p>
                    <div className='Productos-img'></div>
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />
                    <img src="https://dummyjson.com/image/200x300/008080/ffffff?text=Imagen+1" alt="" />

                    <p className='Productos-text'>Ski</p>
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