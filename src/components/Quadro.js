import React from 'react';
import './Components.css'
import Card from 'react-bootstrap/Card'



function Quadro(props){
    return(
            <Card className="mt-5 quadro">
                <Card.Header>{props.Header}</Card.Header>
                <Card.Img src={props.Img}></Card.Img>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                    {props.Text}
                </Card.Text>
            </Card>
    )
}

export default Quadro;
