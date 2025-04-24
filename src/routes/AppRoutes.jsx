import { Routes, Route } from 'react-router-dom';
import {Home} from '../pages/Home';
import {AboutUs} from '../pages/AboutUs';
import {Montain} from '../pages/Montain';
import {Sea} from '../pages/Sea';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/mountain" element={<Mountain />} />
            <Route path="/sea" element={<Sea />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="compras" element={<Compras />} />
        </Routes>
    );
}

export default AppRoutes;