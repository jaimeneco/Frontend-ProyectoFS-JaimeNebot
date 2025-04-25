import './Home.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Carrusel } from '../../components/carrusel/Carrusel';
import { Contenedor } from '../../components/contenedor/Contenedor';
import { TituloNuevosProductos } from '../../components/tituloAnimado/TituloNuevosProductos';
import { NavLink } from 'react-router-dom';

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
                    <Carrusel />
                </div>
                <div className='Main-nuevosProductos'>
                    <TituloNuevosProductos />
                </div>
            </main>
            <Footer />
        </>

    );
}
