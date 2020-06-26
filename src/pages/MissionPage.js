import React from 'react';
import NaveInside from '../components/NaveInside';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from '../components/Logo';
import Card from 'react-bootstrap/Card'


function MissionPage(){

    return (
        <div>
        <NaveInside/>
        <Row>
        <Col sm={4} className="m-auto">
            <Logo/>
        </Col>
        <Col sm={6} className="m-auto">
            <Card>
                <Card.Header as="h5" className=" bg-transparent text-center">Missão</Card.Header>
                <Card.Body>
                    <Card.Text className="text-center">
                        Agregar valor aos nossos clientes utilizando ferramentas e processos inovadores para que se tornem referência em seus segmentos

                    </Card.Text>
                </Card.Body>

            </Card>
            <Card className="mt-5">
                <Card.Header as="h5" className=" bg-transparent text-center">Visão</Card.Header>
                <Card.Body>
                    <Card.Text className="text-center">
                        Ser uma referência de qualidade, inovação e competência em consultoria empresarial 

                    </Card.Text>
                </Card.Body>

            </Card>
        </Col>
        </Row>
        </div>

    )
}

export default MissionPage; 