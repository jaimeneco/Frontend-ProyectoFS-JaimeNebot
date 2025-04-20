import './Usuario.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'


export const Usuario = () => {
    return ( 
        <>
        <Header />
        <main>
            <div className='Main-info'>
                <img src="/" alt="" />
                <p>Nombre de usuario:</p>
                <p>Ciudad:</p>
                <p>País:</p>
            </div>
            <div className='Main-content'>
                <p>¡Nos alegramos de tenerte por aquí!</p>
                <p>Tus últimas búsquedas</p>
            </div>
        </main>
        <Footer />
        </>
    );
}