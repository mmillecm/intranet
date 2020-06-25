import React from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';


import Quadro from '../components/Quadro';
import Quadro1 from '../img/quadro-aviso.jpg'
import corona from '../img/coronavirus.jpg'
import Quadro2 from '../img/quadro-aviso2.jpg'
import Quadro3 from '../img/quadro-aviso3.jpg'
import NaveInside from '../components/NaveInside';


function HomePage(props){

    return(
        <div>
        <NaveInside/>
        <Row className="justify-content-center">
            <Col>
                <Hero/>
            </Col>
        </Row>
        
            <CardDeck className="m-5">
                <Quadro Header="Corona Virus " Img={corona} Text="Use máscara" Title="Cuidado"/>
                <Quadro Header="Teste" Img={Quadro1}/>   
                <Quadro Header="Teste" Img={Quadro2}/>   
                <Quadro Header="Teste" Img={Quadro3}/>             
            </CardDeck>
                   
      
        </div>

    )
}

export default HomePage;