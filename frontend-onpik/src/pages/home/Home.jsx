import './Home.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Carrusel } from '../../components/carrusel/Carrusel';
import { Grid } from '../../components/grid/Grid';
import { TituloNuevosProductos } from '../../components/tituloAnimado/TituloNuevosProductos';
import { NavLink } from 'react-router-dom';

export const Home = () => {
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
            <main className='Main'>
                <div className='Main-content'>
                    <div className='Content-snow'>
                        <NavLink to="/mountain">
                            <img src="./src/public/imgs/img-home/img-landingSnow.png" alt="Imagen snow" title='ONPIK Mountain' className='Content-imgSnow' loading='lazy' />
                        </NavLink>
                    </div>
                    <div className='Content-surf'>
                        <NavLink to="/sea">
                            <img src="./src/public/imgs/img-home/img-landingSurf.jpg" alt="Imagen surf" title='ONPIK Sea' className='Content-imgSurf' loading='lazy' />
                        </NavLink>
                    </div>
                </div>
                {/* <div className='Main-grid'>
                    <div>
                        <Grid />
                    </div>
                </div> */}
                <div className='Main-carrusel'>
                    <p className='Carrusel-text'>¡Descubre todos nuestros productos!</p>
                    <Carrusel images={images} autoPlay={false} />
                </div>
                <div className='Main-nuevosProductos'>
                    <TituloNuevosProductos />
                </div>
            </main>
            <Footer />
        </>

    );
}
