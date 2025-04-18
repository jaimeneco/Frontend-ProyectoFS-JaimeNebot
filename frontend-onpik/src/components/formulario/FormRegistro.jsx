import { useState } from "react";

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
        <main className="Main">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameUser">Nombre:</label>
                <input
                    type="text"
                    id="nameUser"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="surnameUser">Apellidos:</label>
                <input
                    type="text"
                    id="surnameUser"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                />

                <label htmlFor="ageUser">Edad:</label>
                <input
                    type="number"
                    id="ageUser"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <label htmlFor="cityUser">Ciudad:</label>
                <input
                    type="text"
                    id="cityUser"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
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

                <button type="submit">Registrarse</button>
            </form>
        </main>
    );
};