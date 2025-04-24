import './Terminos.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import  TerminosCondiciones from '../../components/acordeonTyc/Tyc'




export const Terminos = () => {
    return ( 
        <>
        <Header />
        <main>
            <TerminosCondiciones />
        </main>
        <Footer />
        </>
    );
}

