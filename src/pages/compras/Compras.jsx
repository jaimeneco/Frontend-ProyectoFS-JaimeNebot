import './Compras.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import CarritoCompras from '../../components/carritoCompras/CarritoCompras';


export const Compras = () => {
    return (
        <>
            <Header />
            <main>
                <CarritoCompras />
            </main>
            <Footer />
        </>
    );
}
