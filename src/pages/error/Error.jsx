import './Error.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'


export const Error = () => {
    return ( 
        <>
        <Header />
        <main className='Error-content'>
            <p>Ups... ¡Parece que hubo un error!</p>
            <img className='Error-img' src="/imgs/img-error.png" alt="" />
        </main>
        <Footer />
        
        </>
    );
}