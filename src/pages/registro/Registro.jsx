import './Registro.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FormRegistro } from '../../components/formulario/FormRegistro';
import { NavLink } from 'react-router-dom';
import CarruselVertical from '../../components/carrusel/CarruselVertical';


export const Registro = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState('')


    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;
    const API_ROUTER = import.meta.env.VITE_API_ROUTER;
    const API_AUTH_REGISTER = import.meta.env.VITE_AUTH_REGISTER;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.includes('@') || password.length < 6) {
            setError('Introduce un email y contraseña válidos');
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas son diferentes");
            return;
        }
        try {
            const res = await fetch(`${API_URL}${API_ROUTER}${API_AUTH_REGISTER}`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            })

            const data = await res.json();

            if (!res.ok) {
                setError(data.msg || "Hubo un error al registrar el usuario");
                return;
            }
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.user))



            setError("");
            navigate('/home')

        } catch (e) {
            console.error("Error en el registro", e);
            setError('Error en la conexión del servidor');
        }



    }
    return (
        <>
            <main className='Registro-main'>
                <div className='Registro-carrusel'>
                    <CarruselVertical />
                </div>
                <div className="Registro-login">
                    <div className='Registro-logoGrande'>
                        <img src="./imgs/logo-white.png" alt="Logo" />
                        <p className='Registro-logoText'>¡Tu tienda de alquiler deportivo!</p>
                    </div>
                    <h1 className="Registro-mainFormTitle">REGISTRO DE USUARIO</h1>
                    <div className='Login-divForm'>
                        <div className='Registro-divForm'>
                            <FormRegistro
                                name={name}
                                setName={setName}
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                confirmPassword={confirmPassword}
                                setConfirmPassword={setConfirmPassword}
                                handleSubmit={handleSubmit}
                            />
                            {error && (
                                <div className='Login-error'>{error}
                                </div>)}
                        </div>
                    </div>
                    
                    <div className='Registro-inicio'>¿Ya tienes una cuenta? <NavLink to='/' className='Link-registro'>¡INICIA SESIÓN AQUÍ! </NavLink></div>
                </div>
            </main>
            <ul className="WelcomeFooter-navList">
                <li className="WelcomeFooter-textLink">
                    © 2025 ONPIK - Todos los derechos reservados
                </li>

                
            </ul>

        </>
    );
}