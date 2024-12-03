import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { homeContext } from "../context/HomeContext";
import BtnCart from "../componets/btnCart";
import "./styles/ProductGallery.css";


const ProductGallery = () => {
  
  const { productos } = useContext(homeContext)
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
 

  // Calcular los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página
  const totalPages = Math.ceil(productos.length / productsPerPage);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container className="gallery-container">
      <h2>Galería de Productos</h2>
      <div className="product-grid">
        {currentProducts.map((productos) => (
          <div className="product-card" key={productos.id}>
            <img src={productos.image} alt={productos.name} />
            <h3>{productos.name}</h3>
            <p>{productos.price}</p>
            <BtnCart />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </Container>
  );
};

export default ProductGallery;
