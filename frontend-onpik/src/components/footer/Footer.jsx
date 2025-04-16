import './Footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <nav className="Footer-nav">
                    <ul className="Footer-navList">
                        <li className="Footer-navLink">
                            <NavLink to="/mountain">Mountain</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink to="/sea">Sea</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink to='/aboutus'>About us</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink to='/usuario'>Usuario</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink to='/compras'>Compras</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="Footer-content">
                    <div className="Footer-logo">
                        <NavLink to="/home">
                            <img src="src/assets/logo.png" alt="Logotipo ONPIK" title='ONPIK' className="Footer-logoImage" loading='lazy' />
                        </NavLink>
                    </div>


                    <ul className="Footer-navList">
                        <li className="Footer-navLink">
                            
                        </li>
                        <li className="Footer-text">
                            <p>© 2025 ONPIK - Todos los derechos reservados</p>
                        </li>
                        <li className="Footer-textLink">
                        <NavLink to='/tyc'>Términos y condiciones</NavLink>
                        </li>
                        <li className="Footer-textLink">
                            <NavLink to='/ppc'>Política de privacidad y cookies</NavLink>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
