import './Welcome.css';
import { FormInicio } from '../../components/formulario/FormInicio';
import { Registro } from '../registro/Registro';
import CarruselVertical from '../../components/carrusel/CarruselVertical'


import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Welcome = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL
    const API_ROUTER = import.meta.env.VITE_API_ROUTER
    const API_AUTH_LOGIN = import.meta.env.VITE_AUTH_LOGIN

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.includes('@') || password.length < 6) {
            setError('Introduce un email y contraseña válidos');
            return;
        }

        try {

            const res = await fetch(`${API_URL}${API_ROUTER}${API_AUTH_LOGIN}`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                // si hay error mostrarlo
                setError(data.msg || "Error en el login");
                return;
            }

            // console.log("Respuesta del login:", data);

            if (data.data.token) {
                setError("");

                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));


                navigate("/");
            } else {
                setError("No ha llegado el token")
            }

            console.log('email:', email)
            console.log('password:', password)
            console.log('logeado')

        } catch (e) {
            console.error("Error en el fetch del login", e);
            setError("Error en la conexión del servidor")

        }
    }

    return (
        <>
            <main className='Welcome-main'>
                <div className='Welcome-carrusel'>
                    <CarruselVertical />
                </div>
                <div className="Main-login">
                    <div className='Logo-grande'>
                        <img src="./imgs/logo.png" alt="" />
                        <p className='Logo-text'>¡Tu tienda de alquiler deportivo!</p>
                    </div>
                    <h1 className="Main-formTitle">INICIO DE SESIÓN</h1>
                    <div className='Login-divForm'>
                        <FormInicio
                            email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleLogin={handleLogin}
                        />
                        {error && (
                            <div className='Login-error'>{error}
                            </div>)}
                    </div>
                    <div className='WelcomeRegistro-inicio'>¿No tienes cuenta? <NavLink to='/registro' className='WelcomeLink-registro'>¡CRÉALA AQUÍ! </NavLink></div>
                </div>
            </main>
            <ul className="WelcomeFooter-navList">
                <li>
                    <NavLink className="WelcomeFooter-navLink" to='/terminos'>Términos y condiciones</NavLink>
                </li>
                <li className="WelcomeFooter-textLink">
                    © 2025 ONPIK - Todos los derechos reservados
                </li>

                <li>
                    <NavLink className="WelcomeFooter-navLink" to='/privacidad'>Política de privacidad y cookies</NavLink>
                </li>
            </ul>
        </>
    );
}