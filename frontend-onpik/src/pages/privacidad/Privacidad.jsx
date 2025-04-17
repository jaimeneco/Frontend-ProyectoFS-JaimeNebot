import './Privacidad.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import  PoliticaPrivacidad from '../../components/acordeonPpc/Ppc'




export const Privacidad = () => {
    return ( 
        <>
        <Header />
        <main>
            <PoliticaPrivacidad />
        </main>
        <Footer />
        </>
    );
}