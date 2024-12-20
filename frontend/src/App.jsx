import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from "react-router-dom";
import { HomeProvaider } from './context/HomeContext';
import NavBar from './componets/Navbar';
import Footer from './componets/Footer';
import Home from './views/Home';
import Registro from './views/Registro';
import ProductGallery from './views/ProductGallery';
import Carrito from './views/Carrito';
import Login from './views/Login';
import Perfil from './views/Perfil';
import Busqueda from "./views/Busqueda";
import MisPublicaciones from "./views/MisPublicaciones";



const App = () => {
  return (
    <HomeProvaider>
        <NavBar />
          <Routes>
            {/* Ruta para la página principal */}
            <Route path="/" element={<Home />} />
            {/* Ruta para la página de registro */}
            <Route path="/Registro" element={<Registro />} />
            <Route path="/ProductGallery" element={<ProductGallery />} />
            <Route path="Login" element={<Login />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path='/Carrito' element={<Carrito />} />
            <Route path="/Busqueda" element={<Busqueda />} />
            <Route path="/MisPublicaciones" element={<MisPublicaciones />} />
          </Routes>
        {/* Footer disponible en todas las rutas */}
        <Footer />
        
      
    </HomeProvaider>
  );
};

export default App
