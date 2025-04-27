import './Mountain.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { CarruselMountain } from '../../components/carrusel/CarruselMountain';
import { TituloMountain } from '../../components/tituloAnimado/TituloMountain';

export const Mountain = () => {
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
                    <CarruselMountain autoPlay={false} />
                </div>
                <div id='snow' className='Main-productos'>
                    <p className='Productos-text' >Snowboard:</p>
                    <div className='Productos-img'>
                        <img src="/imgs/img-productos/img-snow/img-snow-1.png" alt="Imagen snow" />
                        <img src="/imgs/img-productos/img-snow/img-snow-2.png" alt="Imagen snow" />
                        <img src="/imgs/img-productos/img-snow/img-snow-3.png" alt="Imagen snow" />
                        <img src="/imgs/img-productos/img-snow/img-snow-4.png" alt="Imagen snow" />
                        <img src="/imgs/img-productos/img-snow/img-snow-5.png" alt="Imagen snow" />
                    </div>
                    <p className='Productos-text'>Ski:</p>
                    <div className='Productos-img'>
                        <img src="/imgs/img-productos/img-ski/img-ski-1.png" alt="Imagen ski" />
                        <img src="/imgs/img-productos/img-ski/img-ski-2.png" alt="Imagen ski" />
                        <img src="/imgs/img-productos/img-ski/img-ski-3.png" alt="Imagen ski" />
                        <img src="/imgs/img-productos/img-ski/img-ski-4.png" alt="Imagen ski" />
                        <img src="/imgs/img-productos/img-ski/img-ski-5.png" alt="Imagen ski" />
                    </div>

                    <p className='Productos-text'>Equipamiento y accesorios:</p>
                    <div className='Productos-img'>
                        <img src="/imgs/img-productos/img-equipMoun/img-equipMon-1.png" alt="Imagen equipamiento" />
                        <img src="/imgs/img-productos/img-equipMoun/img-equipMon-2.png" alt="Imagen equipamiento" />
                        <img src="/imgs/img-productos/img-equipMoun/img-equipMon-3.png" alt="Imagen equipamiento" />
                        <img src="/imgs/img-productos/img-equipMoun/img-equipMon-4.png" alt="Imagen equipamiento" />
                        <img src="/imgs/img-productos/img-equipMoun/img-equipMon-5.png" alt="Imagen equipamiento" />
                    </div>

                </div>
            </main>
            <Footer />
        </>

    );
}