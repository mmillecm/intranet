import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import capa1 from '../img/capa1.jpg'

function Docs() {
    return(
    <ListGroup variant="flush">
        <ListGroup.Item ><a className="list-group-item-action" download href={capa1}>Documento 1</a></ListGroup.Item>
        <ListGroup.Item ><a className="list-group-item-action" download href={capa1}>Documento 2</a></ListGroup.Item>
        <ListGroup.Item ><a className="list-group-item-action" download href={capa1}>Documento 3</a></ListGroup.Item>
        <ListGroup.Item ><a className="list-group-item-action" download href={capa1}>Documento 4 </a></ListGroup.Item>
    </ListGroup>
    )
    
    
}
export default Docs;