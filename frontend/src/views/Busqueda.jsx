import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import productsData from "../assets/ProductsData.json";
import "./styles/Busqueda.css";

const Busqueda = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <Container className="search-container">
      <h2 className="text-center my-4">Buscar Productos</h2>
      <Form className="mb-4">
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            placeholder="Buscar por nombre del producto..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </Form.Group>
      </Form>

      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Busqueda;
