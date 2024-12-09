import React from 'react'
import { useContext } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import './styles/Carrito.css';
import { homeContext } from '../context/HomeContext'

const Carrito = () => {

    const {carrito} = useContext(homeContext);
    console.log(carrito) 
  return (
    <Container className='ctnCarrito'>
        
        <ListGroup>
          {
            carrito.map((cart,i)=>(
                           
              <ListGroup.Item className='d-flex w-100' key={i}>
                <div className='mx-2 d-flex w-50'>
                  <img className='imgCarrito mx-3' src={cart.img} alt={cart.nombre} />
                  <h4>{cart.nombre.toUpperCase()}</h4>
                </div>
              </ListGroup.Item>
            ))
          }
      </ListGroup>
    
    </Container>
  )
}

export default Carrito