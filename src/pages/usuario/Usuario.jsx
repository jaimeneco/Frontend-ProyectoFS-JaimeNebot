import './Usuario.css';
import { useState, useEffect } from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export const Usuario = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/v1/usuarios/me', {
                    credentials: 'include', // si usas cookies para auth
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Authorization': `Bearer ${token}`, // si usas token
                    },
                });
                const data = await res.json();
                setUsuario(data.data);
            } catch (error) {
                console.error('Error al obtener datos del usuario:', error);
            }
        };

        fetchUsuario();
    }, []);

    const handleLogout = () => {
        // Aquí puedes borrar el token o cerrar sesión
        console.log('Cerrar sesión');
    };

    return (
        <>
            <Header />
            <main className="Usuario-main">
                <p className="Usuario-mainTitle">¡Nos alegramos de tenerte por aquí!</p>

                <div className="Usuario-card">
                    <img
                        className="Usuario-img"
                        src={usuario?.img || '/default-avatar.jpg'}
                        alt="Imagen de perfil"
                    />
                    <p className="Usuario-text">Nombre: {usuario?.nombre || 'Cargando...'}</p>
                    <p className="Usuario-text">Ciudad: {usuario?.ciudad || 'Cargando...'}</p>
                    <p className="Usuario-text">País: {usuario?.pais || 'Cargando...'}</p>
                    <button className="Usuario-button" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
};


// import './Usuario.css';
// import { Header } from '../../components/header/Header'
// import { Footer } from '../../components/footer/Footer'


// export const Usuario = () => {
//     return (
//         <>
//             <Header />
//             <main className='Usuario-main'>
//                 <p className='Usuario-mainTitle'>¡Nos alegramos de tenerte por aquí!</p>
//                 <div className='Usuario-card'>
//                     <img className='Usuario-img' src="/" alt="Img perfil" />
//                     <p className='Usuario-text'>Nombre de usuario:</p>
//                     <p className='Usuario-text'>Ciudad:</p>
//                     <p className='Usuario-text'>País:</p>
//                     <button className='Usuario-button'>Cerrar sesión</button>
//                 </div>
                
//             </main>
//             <Footer />
//         </>
//     );
// }