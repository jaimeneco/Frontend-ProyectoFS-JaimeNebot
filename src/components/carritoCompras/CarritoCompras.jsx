import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarritoCompras.css';

// Componentes reutilizables
export const Card = ({ children }) => (
    <div className="Carrito-card">{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
    <div className={`Carrito-cardContent ${className}`}>{children}</div>
);

export const Button = ({ children, onClick, className = '' }) => (
    <button onClick={onClick} className={`btn-primary ${className}`}>
        {children}
    </button>
);

export const CarritoCompras = () => {
    const [carrito, setCarrito] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoGuardado);
    }, []);

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(item => item.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    };

    const comprar = () => {
        // Aquí podrías agregar lógica de confirmación de compra, etc.
        alert('¡Gracias por tu compra!');
        setCarrito([]);
        localStorage.removeItem('carrito');
        navigate('/home');
    };

    const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrecio = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

    return (
        <div className="Carrito-resumen">
            <h2 className="Carrito-titulo">Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p className="Carrito-vacio">No hay productos en el carrito.</p>
            ) : (
                <div className="Carrito-list">
                    {carrito.map((item) => (
                        <div key={item.id} className="Carrito-item">
                            <span>{item.title} x {item.cantidad}</span>
                            <span>{item.img}</span>
                            <span>{item.price * item.cantidad} €</span>
                            <Button onClick={() => eliminarDelCarrito(item.id)} className="Btn-eliminar">
                                Eliminar
                            </Button>
                        </div>
                    ))}
                    <div className="Carrito-total">
                        <span>Total productos: {totalProductos}</span>
                        <span>Total a pagar: {totalPrecio} €</span>
                    </div>
                    <div className="Carrito-botonComprar">
                        <Button onClick={comprar}>Comprar</Button>
                    </div>
                </div>
            )}
        </div>
    );
};