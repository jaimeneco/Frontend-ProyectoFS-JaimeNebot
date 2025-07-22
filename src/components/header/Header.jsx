import './Header.css';
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="Header">
                <div>
                    <NavLink to="/home">
                        <img src="/imgs/logo.png" alt="Logotipo ONPIK" title='Ir a ONPIK' className="Header-logoImage" loading='lazy' />
                    </NavLink>
                </div>
                <nav className="Header-nav">
                    <ul className="Header-navList">
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/mountain" title='Ir a Mountain'>Mountain</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/sea" title='Ir a Sea'>Sea</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='/aboutus' title='Ir a About us'>About us</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='/login' title='Ir a login'><img src="/imgs/img-header/img-perfil.png" alt="Ir al perfil"/></NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='/compras' title='Ir a compras'><img src="/imgs/img-header/img-carrito.png" alt="Ir a compras"/></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}