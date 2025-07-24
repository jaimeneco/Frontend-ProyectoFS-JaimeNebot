import React, { useState, useEffect } from 'react';

// Componentes reutilizables
export const Card = ({ children }) => (
    <div className="bg-white rounded-2xl shadow-md p-4">{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
    <div className={`p-2 ${className}`}>{children}</div>
);

export const Button = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
    >
        {children}
    </button>
);



export const CarritoCompras = () => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const respuesta = await fetch('https://api.ejemplo.com/productos');
                const datos = await respuesta.json();
                setProductos(datos);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        obtenerProductos();
    }, []);

    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => {
            const existe = prev.find((item) => item.id === producto.id);
            if (existe) {
                return prev.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prev, { ...producto, cantidad: 1 }];
            }
        });
    };

    const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {productos.map((producto) => (
                <Card key={producto.id}>
                    <CardContent className="flex flex-col items-center text-center">
                        <img src={producto.imagen} alt={producto.nombre} className="mb-2 w-32 h-32 object-cover" />
                        <h2 className="text-lg font-bold">{producto.nombre}</h2>
                        <p className="text-sm mb-2">{producto.descripcion}</p>
                        <p className="font-semibold mb-2">${producto.precio}</p>
                        <Button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</Button>
                    </CardContent>
                </Card>
            ))}

            <div className="col-span-full mt-8">
                <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
                {carrito.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <div className="space-y-2">
                        {carrito.map((item) => (
                            <div key={item.id} className="flex justify-between">
                                <span>{item.nombre} x {item.cantidad}</span>
                                <span>${item.precio * item.cantidad}</span>
                            </div>
                        ))}
                        <div className="mt-4 font-bold flex justify-between">
                            <span>Total productos: {totalProductos}</span>
                            <span>Total a pagar: ${totalPrecio}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}