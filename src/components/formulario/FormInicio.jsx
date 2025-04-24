import { useState } from "react";
import './FormInicio.css';
import { NavLink } from "react-router";

export const FormInicio = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando:", formData);
        // Aquí podrías hacer una petición fetch/axios para enviar los datos a una API
    };

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <main className="Form-inicio">
            <form className="Main-form" onSubmit={handleSubmit}>
                <fieldset className="Fieldset">
                    <label className="Fieldset-label" htmlFor="mailUser">Email:</label>
                    <input
                        className="Fieldset-input"
                        type="email"
                        id="mailUser"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label className="Fieldset-label" htmlFor="passwordUser">Contraseña:</label>
                    <input
                        className="Fieldset-input"
                        type="password"
                        id="passwordUser"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button className='Button' type="submit">Iniciar sesión</button>
                    <p>Si no tienes cuenta, <NavLink to="/registro"> ¡regístrate aquí!</NavLink></p>
                </fieldset>
            </form>
        </main>
    );
};