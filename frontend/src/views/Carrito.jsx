import React from 'react'
import { useContext } from 'react'
import { Container, Button, ListGroup } from 'react-bootstrap'
import { homeContext } from '../context/HomeContext'

const Carrito = () => {

    const {carrito} = useContext(homeContext);

  return (
    <Container>
        
        <ListGroup>
          {
            carrito.map((cart,i)=>(
              <ListGroup.Item className='d-flex w-100' key={i}>
                <div className='mx-2 d-flex w-50'>
                  <img className='imgCarrito mx-3' src={cart.img} alt={cart.name} />
                  <h4>{cart.name.toUpperCase()}</h4>
                </div>
              </ListGroup.Item>
            ))
          }
      </ListGroup>
    
    </Container>
  )
}

export default Carrito