import './FormRegistro.css';
import { NavLink } from 'react-router';

export const FormRegistro = ({ name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, handleSubmit }) => {
    return (
        <main className='Form-registro'>
            <form onSubmit={handleSubmit} className="Main-form">
                <fieldset className='Fieldset'>
                    <label className="Fieldset-label">
                        <p className='Fieldset-inputTitle'>Nombre</p>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="Fieldset-input" type="text" />
                    </label>

                    <label className="Fieldset-label">
                        <p className='Fieldset-inputTitle'>Email</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="Fieldset-input" type="text"></input>
                    </label>

                    <label className="Fieldset-label">
                        <p className='Fieldset-inputTitle'>Contraseña</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="Fieldset-input" type="password"></input>
                    </label>

                    <label className="Fieldset-label">
                        <p className='Fieldset-inputTitle'>Confirmar contraseña</p>
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="Fieldset-input" type="password"></input>
                    </label>

                    <button className='Button' type="submit">Registrarme</button>
                    <p>Si ya tienes cuenta, <NavLink to="/login"> ¡entra con tu usuario!</NavLink></p>
            
                </fieldset>
            </form>
        </main>
    )
}

