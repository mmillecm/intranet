import React from "react"
import NaveInside from "../components/NaveInside";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Logo from '../components/Logo'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cards from "../components/Cards";

function Values(params) {
    return(
    <div>
        <NaveInside/>
       <Row>
        <Col sm={4} className="m-auto">
            <Logo/>
        </Col>
        <Col sm={6} className="m-auto">
        <Accordion>
            <Cards variant="warning"
                name="Inovação"
                text="..."
            />
            <Cards variant="success"
                name="Comprometimento"
                text="..."
            />
           
            <Cards variant="primary"
                name="Ética"
                text="..."
            />
            <Cards variant="danger"
                name="Empatia"
                text="..."
            />
            <Cards variant="dark"
                name="Singularidade"
                text="..."
            />
             <Cards variant="light"
                name="Transparência"
                text="..."
            />
        
        </Accordion>
        </Col>

       </Row>

    </div>
        

    )
}

export default Values;