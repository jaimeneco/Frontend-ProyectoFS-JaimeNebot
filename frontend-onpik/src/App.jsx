// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
import { Terminos } from '../src/pages/terminos/Terminos'
import { Privacidad } from '../src/pages/privacidad/Privacidad'
import { Header } from './components/header/Header'




function App() {
  return (
        <BrowserRouter>
          <>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/mountain' element={<Mountain />} />
              <Route path='/sea' element={<Sea />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/usuario' element={<Usuario />} />
              <Route path='/compras' element={<Compras />} />
              <Route path='/login' element={<Login />} />
              <Route path='/registro' element={<Registro />} />
              
              <Route path='/terminos' element={<Terminos />} />
              <Route path='/privacidad' element={<Privacidad />} />

            </Routes>
            </>
        </BrowserRouter>
      
          );
}
export default App;