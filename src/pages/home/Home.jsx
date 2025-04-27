import './Home.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { CarruselHome } from '../../components/carrusel/CarruselHome';
import { Contenedor } from '../../components/contenedor/Contenedor';
import { TituloNuevosProductos } from '../../components/tituloAnimado/TituloNuevosProductos';
// import { NavLink } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <Header />
            <main className='Main'>
                <div className='Main-contenedor'>
                    <Contenedor />
                </div>
                <div className='Main-carrusel'>
                    <p className='Carrusel-title'>DESCUBRE TODOS <br/> NUESTROS PRODUCTOS:</p>
                    <CarruselHome />
                </div>
                <div className='Main-nuevosProductos'>
                    <TituloNuevosProductos />
                </div>
            </main>
            <Footer />
        </>

    );
}
