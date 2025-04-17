import './Header.css';
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="Header">
                <div className="Header-logo">
                    <NavLink to="/">
                        <img src="src/assets/logo.png" alt="Logotipo ONPIK" title='ONPIK' className="Header-logoImage" loading='lazy' />
                    </NavLink>
                </div>
                <nav className="Header-nav">
                    <ul className="Header-navList">
                        <li className="Header-navLink">
                            <NavLink to="/mountain">Mountain</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink to="/sea">Sea</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink to='/aboutus'>About us</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink to='/usuario'>Usuario</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink to='/compras'>Compras</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}