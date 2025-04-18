import './Home.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Carrusel } from '../../components/carrusel/Carrusel';
import { Grid } from '../../components/grid/Grid';

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
        <main>
            <div className='Main-content'>
                <div className='Content-left'>
                    <img src="https://dummyjson.com/image/600x300/008080/ffffff?text=Snow" alt="Imagen snow" />
                </div>
                <div className='Content-right'>
                    <img src="https://dummyjson.com/image/600x300/008080/ffffff?text=Surf" alt="Imagen surf" />
                </div>
            </div>
            <div className='Main-grid'>
                <div>
                <Grid />
                </div>
            </div>
            <div className='Main-carrusel'>
                <p className='Carrusel-text'>¡Descubre todos nuestros productos!</p>
                <Carrusel images={images} autoPlay={false} />
            </div>
            <div className='Main-nuevosProductos'>
                <img src="https://dummyjson.com/image/600x300/008080/ffffff?text=Deportes+varios" alt="Imagen nuevos productos" />
            </div>
        </main>
        <Footer />
        </>
        
    );
}
