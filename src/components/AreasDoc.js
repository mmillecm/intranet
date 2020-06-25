import React from 'react'
import Nav from 'react-bootstrap/Nav'

function AreasDoc(props) {
    return(
        <Nav.Item>
            <Nav.Link className="list-area" eventKey={props.name}>
                {props.name}
            </Nav.Link>
        </Nav.Item>     
    )
    
}

export default AreasDoc;