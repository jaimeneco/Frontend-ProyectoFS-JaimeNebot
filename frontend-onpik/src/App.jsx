import { useState } from 'react'
import './App.css'

// Components:
import {Header} from './components/Header'
import {Footer} from './components/Footer'

// Pages
import {Home} from '../src/pages/home/Home' 
import {AboutUs} from '../src/pages/aboutUs/AboutUs'
import {Mountain} from '../src/pages/mountain/Mountain'
import {Sea} from '../src/pages/sea/Sea'



function App() {
  return (
    <>
    <Header /> 
    <Home />
    <div>
      <h1>Hola, somos ONPIK</h1>
    </div>
    <Footer />
    </>
  );
}

export default App;
