import './Contenedor.css';
import { NavLink } from 'react-router';
export const Contenedor = () => {
    return (
        <>
            <div className="Contenedor-imgs">
                <NavLink className="NavLink" to="/mountain" title='Ir a Mountain'>
                    <div className="Img-card" href="http://localhost:5173/mountain">
                        <img src="./src/public/imgs/img-home/img-gridSnow.jpg" alt="Ir a tablas Mountain" loading="lazy" />
                        <p className="Text">LAS MEJORES TABLAS Y SKIS</p>
                    </div>
                </NavLink>
                <NavLink className="NavLink" to="/sea" title='Ir a Mountain'>
                    <div className="Img-card">
                        <img src="./src/public/imgs/img-home/img-gridKite.jpg" alt="Ir a equipo Sea" loading="lazy" />
                        <p className="Text">TODO PARA DEPORTES DE AGUA</p>
                    </div>
                </NavLink>
                <NavLink className="NavLink" to="/sea" title='Ir a Mountain'>
                    <div className="Img-card">
                        <img src="./src/public/imgs/img-home/img-gridSurf.jpg" alt="Ir a tablas Sea" loading="lazy" />
                        <p className="Text">¡MÉTETE AL AGUA 100% EQUIPADO!</p>
                    </div>
                </NavLink>
                <NavLink className="NavLink" to="/mountain" title='Ir a Mountain'>
                    <div className="Img-card">
                        <img src="./src/public/imgs/img-home/img-gridSki.jpg" alt="Ir a equipo Mountain" loading="lazy" />
                        <p className="Text">¡NO PASES FRÍO AHÍ ARRIBA!</p>
                    </div>
                </NavLink>
            </div>
        </>
    );
};