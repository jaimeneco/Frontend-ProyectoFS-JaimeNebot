// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components:
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

// Pages
// import { Login } from ''
// import { Registro } from ''
// import { Home } from '../src/pages/home/Home'
// import { Mountain } from '../src/pages/mountain/Mountain'
// import { Sea } from '../src/pages/sea/Sea'
// import { AboutUs } from '../src/pages/aboutUs/AboutUs'
// import { Carrito } from '';
// import { Perfil } from '';
// import {Error} from '';


// PAGES EXPORRTADAS



function App() {
  return (
        <BrowserRouter>
          <>
          <Header />
          <Footer />
            {/* <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/registro' element={<Registro />} />
              <Route path='/home' element={<Home />} />
              <Route path='/mountain' element={<Mountain />} />
              <Route path='/sea' element={<Sea />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/perfil' element={<Perfil />} />
            </Routes> */}
            </>
        </BrowserRouter>
      
          );
}
export default App;