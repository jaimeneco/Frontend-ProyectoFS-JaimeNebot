// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components:
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

// Pages
import { Login } from '../src/pages/login/Login'
import { Registro } from '../src/pages/registro/Registro'
import { Home } from '../src/pages/home/Home'
import { Mountain } from '../src/pages/mountain/Mountain'
import { Sea } from '../src/pages/sea/Sea'
import { AboutUs } from '../src/pages/aboutUs/AboutUs'
import { Compras } from '../src/pages/compras/Compras'
import { Usuario } from '../src/pages/usuario/Usuario'
import {Error} from '../src/pages/error/Error'


// PAGES EXPORRTADAS



function App() {
  return (
        <BrowserRouter>
          <>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/registro' element={<Registro />} />
              <Route path='/home' element={<Home />} />
              <Route path='/mountain' element={<Mountain />} />
              <Route path='/sea' element={<Sea />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/compras' element={<Compras />} />
              <Route path='/usuario' element={<Usuario />} />
            </Routes>
            </>
        </BrowserRouter>
      
          );
}
export default App;