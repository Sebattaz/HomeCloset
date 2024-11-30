import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Home Closet</h1>
      <p>El marketplace para ropa de hogar</p>
      {/* Botón para ir a la página de registro */}
      <Link to="/Registro">
        <button className="register-button">Registrarse</button>
      </Link>
    </div>
  );
};

export default Home;
