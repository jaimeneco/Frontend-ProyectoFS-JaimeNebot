import './Header.css';
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="Header">
                <div>
                    <NavLink to="/">
                        <img src="src/assets/logo.png" alt="Logotipo ONPIK" title='ONPIK' className="Header-logoImage" loading='lazy' />
                    </NavLink>
                </div>
                <nav className="Header-nav">
                    <ul className="Header-navList">
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/mountain">Mountain</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/sea">Sea</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='/aboutus'>About us</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='/usuario'><img src="./src/public/imgs/img-header/img-perfil.png" alt="Ir al perfil"/></NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='/compras'><img src="./src/public/imgs/img-header/img-compras.png" alt="Ir a compras"/></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}