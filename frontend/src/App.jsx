import React from 'react';
import Footer from './components/Footer'; 
import Registro from './components/Registro';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductGallery from "./components/ProductGallery";


const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            {/* Ruta para la página principal */}
            <Route path="/" element={<Home />} />
            {/* Ruta para la página de registro */}
            <Route path="/Registro" element={<Registro />} />
            <Route path="/ProductGallery" element={<ProductGallery />} />
          </Routes>
        </div>
        {/* Footer disponible en todas las rutas */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
