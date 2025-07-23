import './Usuario.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'


export const Usuario = () => {
    return (
        <>
            <Header />
            <main className='Usuario-main'>
                <p className='Usuario-mainTitle'>¡Nos alegramos de tenerte por aquí!</p>
                <div className='Usuario-card'>
                    <img className='Usuario-img' src="/" alt="Img perfil" />
                    <p className='Usuario-text'>Nombre de usuario:</p>
                    <p className='Usuario-text'>Ciudad:</p>
                    <p className='Usuario-text'>País:</p>
                    <button className='Usuario-button'>Cerrar sesión</button>
                </div>
                
            </main>
            <Footer />
        </>
    );
}