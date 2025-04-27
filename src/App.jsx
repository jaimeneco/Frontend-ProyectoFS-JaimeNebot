import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import { Login } from './pages/login/Login'
import { Home } from './pages/home/Home'
import { Mountain } from './pages/mountain/Mountain'
import { Sea } from './pages/sea/Sea'
import { AboutUs } from './pages/aboutUs/AboutUs'
import { Usuario } from './pages/usuario/Usuario'
import {Error} from './pages/error/Error'
import { Terminos } from './pages/terminos/Terminos'
import { Privacidad } from './pages/privacidad/Privacidad'




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