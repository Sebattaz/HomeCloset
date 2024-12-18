import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import "./styles/MisPublicaciones.css";

const MisPublicaciones = () => {
  const [productos, setProductos] = useState([
    { id: 1, name: "Sábanas Premium", price: "$50", image: "/src/assets/sabanas.jpg" },
    { id: 2, name: "Cobija Suave", price: "$40", image: "/src/assets/cobija.jpg" },
    { id: 3, name: "Almohada Cómoda", price: "$30", image: "/src/assets/almohada.jpg" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });

  // Función para manejar la carga de la imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result }); // Establece la imagen como una URL de datos
      };
      reader.readAsDataURL(file); // Lee la imagen seleccionada como una URL de datos
    }
  };

  const handleDelete = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.image) {
      const newId = productos.length + 1;
      setProductos([...productos, { ...newProduct, id: newId }]);
      setNewProduct({ name: "", price: "", image: "" });
      setShowModal(false);
    }
  };

  return (
    <Container className="mis-publicaciones-container py-4">
      <h2 className="text-center mb-4">Mis Publicaciones</h2>
      <Row>
        {productos.map((producto) => (
          <Col md={4} key={producto.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={producto.image}
                alt={producto.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>{producto.price}</Card.Text>
                <Button variant="danger" onClick={() => handleDelete(producto.id)}>
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Agregar Producto
        </Button>
      </div>

      {/* Modal para Agregar Producto */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                placeholder="Ingresa el nombre del producto"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                placeholder="Ingresa el precio"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Seleccionar Imagen</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
              />
              {newProduct.image && (
                <div className="mt-3">
                  <img
                    src={newProduct.image}
                    alt="Vista previa"
                    style={{ width: "100%", height: "auto", maxHeight: "200px", objectFit: "cover" }}
                  />
                </div>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MisPublicaciones;
