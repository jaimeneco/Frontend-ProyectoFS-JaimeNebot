import './Usuario.css';
import { useState, useEffect } from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';


export const Usuario = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const fetchUsuario = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const res = await fetch('http://localhost:3000/api/v1/auth/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await res.json();

                if (res.ok) {
                    setUsuario(data.data.user || data.data);
                    // console.log(user, 'Userrrrrr2')
                } else {
                    console.error('Error en la respuesta:', data.msg || data);
                }
            } catch (error) {
                console.error('Error al obtener datos del usuario:', error);
            }
        };

        fetchUsuario();
        // console.log(usuario, 'Userrrrrr')
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // quitar el token
        window.location.href = '/'; // redirigir al home o login
    };

    return (
        <>
            <Header />
            <main className="Usuario-main">
                <p className="Usuario-mainTitle">¡Nos alegramos de tenerte por aquí!</p>

                <div className="Usuario-card">
                    <img
                        className="Usuario-img"
                        src={usuario?.imagen || 'imgs/avatar-porDefecto.jpg'}
                        alt="Imagen de perfil"
                    />
                    <p className="Usuario-text">Nombre: {usuario?.name || 'Cargando...'}</p>
                    <p className="Usuario-text">Email: {usuario?.email || 'Cargando...'}</p>
                    <button className="Usuario-button" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
};