import './FormInicio.css';

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
                </fieldset>
            </form>
        </main>
    )
}