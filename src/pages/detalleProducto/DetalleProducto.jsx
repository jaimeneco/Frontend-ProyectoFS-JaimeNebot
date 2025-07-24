import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Card, CardContent } from '../../components/carritoCompras/CarritoCompras';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import './DetalleProducto.css';

export const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/v1/productos/${id}`);
                const data = await res.json();
                setProducto(data.data);
            } catch (error) {
                console.error('Error al obtener producto:', error);
            }
        };

        fetchProducto();
    }, [id]);

    const handleAgregarAlCarrito = () => {
        // Aquí podrías llamar a una función de contexto o localStorage
        console.log('Producto añadido:', producto);
    };

    if (!producto) return <p>Cargando producto...</p>;

    return (
        <>
            <Header />
            <main className="Detalle-container">
                <Card>
                    <CardContent className="Detalle-contenido">
                        <img
                            src={producto.img}
                            alt={producto.title}
                            className="Detalle-img"
                        />
                        <div className="Detalle-info">
                            <h2 className="Detalle-titulo">{producto.title}</h2>
                            <p className="Detalle-descripcion">{producto.description}</p>
                            <p className="Detalle-precio">{producto.price} €/día</p>
                            <Button onClick={handleAgregarAlCarrito}>Añadir al carrito</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </>
    );
}