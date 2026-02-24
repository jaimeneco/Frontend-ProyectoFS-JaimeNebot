import { useState, useEffect } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = () => {
    const token = localStorage.getItem('token');
    const [menuOpen, setMenuOpen] = useState(false);

    // Cierra el menú al cambiar de ruta o al hacer resize a desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="Header">
            <NavLink to="/home" onClick={closeMenu}>
                <img
                    src="/imgs/logo.png"
                    alt="Logotipo ONPIK"
                    title="Ir a ONPIK"
                    className="Header-logoImage"
                    loading="lazy"
                />
            </NavLink>

            {/* Botón hamburguesa (solo visible en móvil/tablet) */}
            <button
                className={`Header-hamburger ${menuOpen ? 'is-open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Overlay oscuro al abrir el menú en móvil */}
            {menuOpen && (
                <div className="Header-overlay" onClick={closeMenu} />
            )}

            <nav className={`Header-nav ${menuOpen ? 'is-open' : ''}`}>
                <ul className="Header-navList">
                    <li>
                        <NavLink className="Header-navLink" to="/mountain" title="Ir a Mountain" onClick={closeMenu}>
                            Mountain
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="Header-navLink" to="/sea" title="Ir a Sea" onClick={closeMenu}>
                            Sea
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="Header-navLink" to="/aboutus" title="Ir a About us" onClick={closeMenu}>
                            About us
                        </NavLink>
                    </li>
                    {token && (
                        <>
                            <li>
                                <NavLink className="Header-navLink Header-navLink--icon" to="/usuario" title="Ir a perfil" onClick={closeMenu}>
                                    <img src="/imgs/img-header/img-perfil.png" alt="Ir al perfil" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="Header-navLink Header-navLink--icon" to="/compras" title="Ir a compras" onClick={closeMenu}>
                                    <img src="/imgs/img-header/img-carrito.png" alt="Ir a compras" />
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};