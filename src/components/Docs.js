import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import capa1 from '../img/capa1.jpg'

function Docs() {
    return(
    <ListGroup variant="flush">
        <ListGroup.Item ><a className="list-group-item-action" download href={capa1}>Teste </a></ListGroup.Item>
        <ListGroup.Item className="list-group-item-action" >Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item className="list-group-item-action" >Morbi leo risus</ListGroup.Item>
        <ListGroup.Item className="list-group-item-action">Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
    )
    
    
}
export default Docs;