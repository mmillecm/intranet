import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'


function Cards(props){


    return(
        <Card>
            <Accordion.Toggle as={Button} variant={props.variant} eventKey={props.name}>
                        {props.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.name}>
                <Card.Body>{props.text}</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
export default Cards