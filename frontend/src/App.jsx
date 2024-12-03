import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './componets/Navbar';
import Footer from './componets/Footer'
import Home from './views/Home';
import Registro from './views/Registro';
import ProductGallery from './views/ProductGallery';
import Login from "./views/Login";
import Perfil from "./views/Perfil";

const App = () => {
  return (
    <>
     <NavBar />
          <Routes>
            {/* Ruta para la página principal */}
            <Route path="/" element={<Home />} />
            {/* Ruta para la página de registro */}
         
            <Route path="/Registro" element={<Registro />} />
            <Route path="/ProductGallery" element={<ProductGallery />} />
            <Route path="Login" element={<Login />} />
            <Route path="/Perfil" element={<Perfil />} />
          </Routes>
        {/* Footer disponible en todas las rutas */}
     <Footer />
      
    </>
  );
};

export default App
