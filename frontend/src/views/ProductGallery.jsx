import React, { useState } from "react";
import { Container } from "react-bootstrap";
import products from "/src/ProductsData";
import "./styles/ProductGallery.css";

const ProductGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
 

  // Calcular los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambiar de página
  const totalPages = Math.ceil(products.length / productsPerPage);
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
        {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
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
