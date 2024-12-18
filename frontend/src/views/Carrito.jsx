import React, { useContext } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import './styles/Carrito.css';
import { homeContext } from '../context/HomeContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(homeContext);

  // Calcular el total de precios
  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0);
  };

  // Eliminar un producto del carrito
  const eliminarProducto = (id) => {
    // Filtrar el carrito para eliminar el producto con el ID correspondiente
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <Container className='ctnCarrito'>
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <h4 className="text-center">Tu carrito está vacío</h4>
      ) : (
        <>
          <ListGroup>
            {carrito.map((cart) => (
              <ListGroup.Item
                className='d-flex justify-content-between align-items-center'
                key={cart.id} // Asegúrate de que cada item tenga un ID único
              >
                <div className='d-flex align-items-center'>
                  <img
                    className='imgCarrito mx-3'
                    src={cart.img}
                    alt={cart.nombre}
                  />
                  <div>
                    <h5>{cart.nombre.toUpperCase()}</h5>
                    <p>Precio: ${cart.precio}</p>
                  </div>
                </div>
                <Button
                  variant="danger"
                  onClick={() => eliminarProducto(cart.id)} // Usamos el ID para eliminar
                >
                  Eliminar
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="text-end mt-4">
            <h4>Total: ${calcularTotal().toLocaleString('es-CL')}</h4>
          </div>
        </>
      )}
    </Container>
  );
};

export default Carrito;
