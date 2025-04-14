import { useState } from 'react'
import './App.css'

// Components:
import {Header} from './components/Header'
import {Footer} from './components/Footer'

// Pages
import {Home} from './pages/Home.jsx'
import {AboutUs} from './pages/AboutUs.jsx'
import {Mountain} from './pages/Mountain.jsx'
import {Sea} from './pages/Sea.jsx'



function App() {
  return (
    <>
    <Header /> 
    <div>
      <h1>Hola, somos ONPIK</h1>
    </div>
    <Footer />
    </>
  );
}

export default App;
