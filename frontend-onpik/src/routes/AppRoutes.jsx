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
            <Route path="/montain" element={<Montain />} />
            <Route path="/sea" element={<Sea />} />
        </Routes>
    );
}

export default AppRoutes;