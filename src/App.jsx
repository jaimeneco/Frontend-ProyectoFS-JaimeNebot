// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import { Login } from '../src/pages/login/Login'
import { Home } from '../src/pages/home/Home'
import { Mountain } from '../src/pages/mountain/Mountain'
import { Sea } from '../src/pages/sea/Sea'
import { AboutUs } from '../src/pages/aboutUs/AboutUs'
import { Usuario } from '../src/pages/usuario/Usuario'
import {Error} from '../src/pages/error/Error'
import { Terminos } from '../src/pages/terminos/Terminos'
import { Privacidad } from '../src/pages/privacidad/Privacidad'




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
              <Route path='/login' element={<Login />} />
              
              <Route path='/terminos' element={<Terminos />} />
              <Route path='/privacidad' element={<Privacidad />} />

              <Route path='/error' element={<Error />} />

            </Routes>
            </>
        </BrowserRouter>
      
          );
}
export default App;