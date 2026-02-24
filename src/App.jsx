import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'

// Pages
import { Home } from './pages/home/Home'
import { Mountain } from './pages/mountain/Mountain'
import { Sea } from './pages/sea/Sea'
import { AboutUs } from './pages/aboutUs/AboutUs'
import { Usuario } from './pages/usuario/Usuario'
import { Error } from './pages/error/Error'
import { Terminos } from './pages/terminos/Terminos'
import { Privacidad } from './pages/privacidad/Privacidad'
import { Compras } from './pages/compras/Compras'
import { Registro } from './pages/registro/Registro'
import { Welcome } from './pages/welcome/Welcome'
import { DetalleProducto } from './pages/detalleProducto/DetalleProducto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path='/' element={<Welcome />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/terminos' element={<Terminos />} />
        <Route path='/privacidad' element={<Privacidad />} />
        <Route path='/error' element={<Error />} />

        {/* Rutas protegidas */}
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/mountain' element={<ProtectedRoute><Mountain /></ProtectedRoute>} />
        <Route path='/sea' element={<ProtectedRoute><Sea /></ProtectedRoute>} />
        <Route path='/aboutus' element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
        <Route path='/usuario' element={<ProtectedRoute><Usuario /></ProtectedRoute>} />
        <Route path='/producto/:id' element={<ProtectedRoute><DetalleProducto /></ProtectedRoute>} />
        <Route path='/compras' element={<ProtectedRoute><Compras /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;