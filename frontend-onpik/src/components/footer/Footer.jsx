import './Footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <nav className="Footer-nav">
                    <ul className="Footer-navList">
                        <li className="Footer-navLink">
                            <NavLink to='/home'>Home</NavLink>
                        </li>
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
                            <NavLink to='/Usuario'>Usuario</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="Footer-content">
                    <img src="src/assets/logo.png" alt="Logotipo ONPIK" title='ONPIK' className="Footer-logoImage" loading='lazy' />

                    <ul className="Footer-navList">
                        <li className="Footer-text">
                            <p>© 2025 ONPIK - Todos los derechos reservados</p>
                        </li>
                        <li className="Footer-textLink">
                            <a href="/">Términos y condiciones</a>
                        </li>
                        <li className="Footer-textLink">
                            <a href="/">Política de privacidad y cookies</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
