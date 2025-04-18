import { useState } from "react";

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
        <main className="Main">
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailUser">Email:</label>
                <input
                    type="email"
                    id="mailUser"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="passwordUser">Contraseña:</label>
                <input
                    type="password"
                    id="passwordUser"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit">Iniciar sesión</button>
            </form>
        </main>
    );
};