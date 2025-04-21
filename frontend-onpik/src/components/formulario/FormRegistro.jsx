import { useState } from "react";
import './FormRegistro.css';
import { NavLink } from "react-router";

export const FormRegistro = () => {
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
        <main className="Form-registro">
            <form className="Main-form" onSubmit={handleSubmit}>
            <fieldset className="Fieldset">
                <label className="Fieldset-label" htmlFor="nameUser">Nombre:</label>
                <input
                    className="Fieldset-input"
                    type="text"
                    id="nameUser"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label className="Fieldset-label" htmlFor="surnameUser">Apellidos:</label>
                <input
                    className="Fieldset-input"
                    type="text"
                    id="surnameUser"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                />

                <label className="Fieldset-label" htmlFor="ageUser">Edad:</label>
                <input
                    className="Fieldset-input"
                    type="number"
                    id="ageUser"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <label className="Fieldset-label" htmlFor="cityUser">Ciudad:</label>
                <input
                    className="Fieldset-input"
                    type="text"
                    id="cityUser"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
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

                <button className='Button' type="submit">Registrarme</button>
                <p>Si ya tienes cuenta, <NavLink to="/login"> ¡entra con tu usuario!</NavLink></p>
            </fieldset>
            </form>
        </main>
    );
};