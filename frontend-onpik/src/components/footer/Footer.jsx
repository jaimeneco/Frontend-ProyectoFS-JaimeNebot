import './Footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <nav className="Footer-nav">
                    <ul className="Footer-navList">
                        <li className="Footer-navLink">
                            <NavLink className="Footer-navLink" to="/mountain">Mountain</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink className="Footer-navLink" to="/sea">Sea</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink className="Footer-navLink" to='/aboutus'>About us</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink className="Footer-navLink" to='/usuario'>Usuario</NavLink>
                        </li>
                        <li className="Footer-navLink">
                            <NavLink className="Footer-navLink" to='/compras'>Compras</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="Footer-content">
                    <div className="Footer-logo">
                        <NavLink to="/">
                            <img src="src/public/imgs/img-footer/logo-footer.png" alt="Logotipo ONPIK" title='ONPIK' className="Footer-logoImage" loading='lazy' />
                        </NavLink>
                    </div>

                    <ul className="Footer-navList">
                        <li className="Footer-text">
                            <p>© 2025 ONPIK - Todos los derechos reservados</p>
                        </li>
                        <li className="Footer-textLink">
                        <NavLink className="Footer-navLink" to='/terminos'>Términos y condiciones</NavLink>
                        </li>
                        <li className="Footer-textLink">
                            <NavLink className="Footer-navLink" to='/privacidad'>Política de privacidad y cookies</NavLink>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
