import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./styles/Perfil.css"; 

const Perfil = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Guarda la imagen en base64 para mostrarla
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} className="shadow p-4 rounded bg-light">
          <h2 className="text-center mb-4">Mi Perfil</h2>

          {/* Subir Foto */}
          <div className="text-center mb-4">
            <div className="profile-pic-container">
              <img
                src={image || "/src/assets/default-profile.png"}
                alt="Profile"
                className="profile-pic"
              />
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-3"
              />
            </div>
          </div>

          {/* Botones */}
          <div className="d-grid gap-3">
            <Button variant="primary">Mis Productos Favoritos</Button>
            <Button variant="success">Mis Compras</Button>
            <Button variant="info">Mis Publicaciones</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
