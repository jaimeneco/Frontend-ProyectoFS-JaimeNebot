import './Sea.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { CarruselSea } from '../../components/carrusel/CarruselSea';
import { TituloSea } from '../../components/tituloAnimado/TituloSea';

export const Sea = () => {
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
                    <p className='Carrusel-title'>TODO LO NECESARIO <br /> PARA METERTE <br />AL AGUA</p>
                    <CarruselSea autoPlay={false} />
                </div>
                <div className='Main-productos'>
                    <p className='Productos-text'>Surfboard:</p>
                    <div className='Productos-img'>
                        <img src="/imgs/img-productos/img-surf/img-surf-1.png" alt="Imagen surf" />
                        <img src="/imgs/img-productos/img-surf/img-surf-2.png" alt="Imagen surf" />
                        <img src="/imgs/img-productos/img-surf/img-surf-3.png" alt="Imagen surf" />
                        <img src="/imgs/img-productos/img-surf/img-surf-4.png" alt="Imagen surf" />
                        <img src="/imgs/img-productos/img-surf/img-surf-5.png" alt="Imagen surf" />
                    </div>
                    <p className='Productos-text'>Kitesurf:</p>
                    <div className='Productos-img'>
                        <img src="/imgs/img-productos/img-kite/img-kite-1.png" alt="Imagen kite" />
                        <img src="/imgs/img-productos/img-kite/img-kite-2.png" alt="Imagen kite" />
                        <img src="/imgs/img-productos/img-kite/img-kite-3.png" alt="Imagen kite" />
                        <img src="/imgs/img-productos/img-kite/img-kite-4.png" alt="Imagen kite" />
                        <img src="/imgs/img-productos/img-kite/img-kite-5.png" alt="Imagen kite" />
                    </div>

                    <p className='Productos-text'>Equipamiento y accesorios:</p>
                    <div className='Productos-img'>
                        <img src="/imgs/img-productos/img-equipSea/img-equipMar-1.png" alt="Imagen equipMar" />
                        <img src="/imgs/img-productos/img-equipSea/img-equipMar-2.png" alt="Imagen equipMar" />
                        <img src="/imgs/img-productos/img-equipSea/img-equipMar-3.png" alt="Imagen equipMar" />
                        <img src="/imgs/img-productos/img-equipSea/img-equipMar-4.png" alt="Imagen equipMar" />
                        <img src="/imgs/img-productos/img-equipSea/img-equipMar-5.png" alt="Imagen equipMar" />
                    </div>

                </div>
            </main>
            <Footer />
        </>

    );
}