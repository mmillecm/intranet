import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import capa from '../img/capa1.jpg';
import capa2 from '../img/capa2.jpg';
import capa3 from '../img/capa3.jpg'

function Hero(props){
    return(
        <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={capa}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={capa2}
            alt="Third slide"
          />
      
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={capa3}
            alt="Third slide"
          />
      
       
        </Carousel.Item>
      </Carousel>
    );
}

export default Hero;