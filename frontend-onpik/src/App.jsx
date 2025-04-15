import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components:
import { Header } from './components/Header'
import { Footer } from './components/Footer'

// Pages
import { Login } from ''
import { Registro } from ''
import { Home } from '../src/pages/home/Home'
import { Mountain } from '../src/pages/mountain/Mountain'
import { Sea } from '../src/pages/sea/Sea'
import { AboutUs } from '../src/pages/aboutUs/AboutUs'
import { Carrito } from '';
import { Perfil } from '';
import {Error} from '';


  // PAGES EXPORRTADAS



  function App() {
    return (
        <BrowserRouter>

          <>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/registro' element={<Registro />} />
              <Route path='/home' element={<Home />} />
              <Route path='/mountain' element={<Mountain />} />
              <Route path='/sea' element={<Sea />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/perfil' element={<Perfil />} />


              {/* Añadir subruta dentro de ruta */}
              {/* <Route path='/actividades/*' element={<Outlet />}>
              <Route path='rafting' element={<Rafting />} />
              <Route path='vias_ferratas' element={<ViasFerratas />} />
              <Route path='vuelos_en_globo' element={< VuelosGlobo />} />
              <Route path='parapente' element={<Parapente />} />
              <Route path='barranquismo' element={<Barranquismo />} />
              <Route path='escalada' element={<Escalada />} />
              <Route path='nopage' element={<Vacia />} /> */}

            </Routes>

          </>
          </BrowserRouter>
      
          );
}
export default App;