// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FormInicio } from '../components/formulario/FormInicio';

// export const FormInicio = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await fetch('http://localhost:3000/api/v1/usuarios/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email, password })
//             });

//             const data = await res.json();

//             if (res.ok) {
//                 // Suponemos que el backend devuelve un token y datos de usuario
//                 localStorage.setItem('token', data.token);
//                 localStorage.setItem('usuario', JSON.stringify(data.usuario));

//                 // Redirige al usuario a la home o donde quieras
//                 navigate('/');
//             } else {
//                 alert(data.message || 'Credenciales incorrectas');
//             }

//         } catch (error) {
//             console.error('Error al iniciar sesión:', error);
//             alert('Ocurrió un error en el servidor');
//         }
//     };

//     return (
//         <FormInicio
//             email={email}
//             password={password}
//             setEmail={setEmail}
//             setPassword={setPassword}
//             handleLogin={handleLogin}
//         />
//     );
// };


import './FormInicio.css';

import { NavLink } from "react-router-dom"

export const FormInicio = ({ email, password, setEmail, setPassword, handleLogin }) => {
    return (
        <main className='Form-inicio'>
            <form onSubmit={handleLogin} className="Main-form">
                <fieldset className='Fieldset'>
                    <label className="Fieldset-label">
                        <p className='Fieldset-inputTitle'>Email</p>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} className="Fieldset-input" type="email" />
                    </label>

                    <label className="Fieldset-label">
                        <p className='Fieldset-inputTitle'>Contraseña</p>
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} className="Fieldset-input" type="password"></input>
                    </label>
                    <button className='Button'>Iniciar sesión</button>
                    {/* <p>Si no tienes cuenta, <NavLink to="/registro"> ¡regístrate aquí!</NavLink></p> */}
                </fieldset>
            </form>
        </main>
    )
}