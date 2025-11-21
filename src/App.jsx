import { useState } from 'react';
import Carrito from './components/Carrito';
import Header from './components/Header';
import Inicio from './Pages/Inicio';
import Moda from './Pages/Moda';
import { Routes, Route } from 'react-router-dom';
import ProductoDetalle from './pages/ProductoDetalle';
import Footer from './components/Footer';
import Tecnologia from './Pages/Tecnologia';
import Contacto from './components/Contacto';
import Joyas from './Pages/Joyas'; 
import Login from './Pages/login';
import RutaProtegida from './components/RutaProtegida';
import Admin from './Pages/Admin';

function App() {

  return (
    <>
      <Header/>
      
        <Routes> 
        <Route path='/' element={<Inicio />}/> 
        <Route path='/moda' element={<Moda />}/> 
        <Route path='/tecnologia' element={<Tecnologia />}/> 
        <Route path='/login' element={<Login />}/>  
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/productos/:id' element={<ProductoDetalle />}/>
        <Route path='/carrito'element={<RutaProtegida><Carrito/></RutaProtegida>}/>
        <Route path='/joyas' element={<Joyas/>}/> 
        <Route path='/admin' element={<RutaProtegida><Admin/></RutaProtegida>}/>
        
      </Routes> 
      <Footer/>     
    </>
  )
}

export default App