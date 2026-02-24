import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Card, CardContent } from '../../components/carritoCompras/CarritoCompras';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import './DetalleProducto.css';

const API_URL = import.meta.env.VITE_API_URL;
const API_ROUTER = import.meta.env.VITE_API_ROUTER;

export const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const res = await fetch(`${API_URL}${API_ROUTER}/productos/${id}`);
                const data = await res.json();
                setProducto(data.data);
            } catch (error) {
                console.error('Error al obtener producto:', error);
            }
        };

        fetchProducto();
    }, [id]);

    const handleAgregarAlCarrito = () => {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const existe = carrito.find((item) => item._id === producto._id);

        if (existe) {
            const actualizado = carrito.map((item) =>
                item._id === producto._id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            localStorage.setItem('carrito', JSON.stringify(actualizado));
        } else {
            carrito.push({ ...producto, cantidad: 1 });
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }

        alert('Producto añadido al carrito');
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