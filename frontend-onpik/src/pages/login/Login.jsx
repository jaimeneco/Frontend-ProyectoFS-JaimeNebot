import './Login.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { FormInicio } from '../../components/formulario/FormInicio';

export const Login = () => {
    return ( 
        <>
        <Header />
        <main className='Main-login'>
            <p className='Main-formTitle'>INICIO DE SESIÓN:</p>
            <FormInicio />
        </main>
        <Footer />
        </>
    );
}