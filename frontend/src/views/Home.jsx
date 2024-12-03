import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import './styles/Home.css';


const Home = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }

  return (
    <Container className="container" >
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      <Carousel.Item className="carousel-item">
        <img className="imgCarousel" src="/src/img/carousel.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Duerme como nunca</h3>
          <p>Sabanas de 380 y 500 hilos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img className="imgCarousel" src="/src/img/carousel2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Luego de una ducha</h3>
          <p>Toallas, toallones, rostro y manos. 100% Algodon</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img className="imgCarousel" src="/src/img/carousel3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>El descanso que mereces</h3>
          <p>Almohadas de pluma y sinteticas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img className="imgCarousel" src="/src/img/carousel4.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Manten tu cocina en orden</h3>
          <p>Paños de cocina ultra absorbentes</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Container>
  );
};

export default Home;
