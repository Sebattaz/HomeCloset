import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import './styles/Home.css'


const Home = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
      <Carousel.Item>
        <img className="imgCarousel" src="/src/assets/HomeClosetBanner.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Primera imagen</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src="/src/assets/logo.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Segunda imagen</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src="/src/assets/HomeClosetBanner.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Tercera imagen</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Container>
  );
};

export default Home;
