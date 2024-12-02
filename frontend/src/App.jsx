import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from "react-router-dom";
import { HomeProvaider } from './context/HomeContext';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home';
import Registro from './views/Registro';
import ProductGallery from './views/ProductGallery';

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
          </Routes>
        {/* Footer disponible en todas las rutas */}
        <Footer />
      
    </HomeProvaider>
  );
};

export default App
