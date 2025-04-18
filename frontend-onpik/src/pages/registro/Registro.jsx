import './Registro.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { FormRegistro } from '../../components/formulario/FormRegistro';

export const Registro = () => {
    return ( 
        <>
        <Header />
        <main>
            <p>REGISTRA TU USUARIO:</p>
            <FormRegistro />
        </main>
        <Footer />
        </>
    );
}