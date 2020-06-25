import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Components.css'

function Nave(){    
  return(
    <div className="place-title border-bottom body" >
        <h1 className="title">TechProcess</h1>
        <Navbar >
        <Navbar.Toggle aria-controls="bottom" />
        <Navbar.Collapse id="bottom"  className="justify-content-center">
        </Navbar.Collapse>
        </Navbar>
    </div>  
  )
}
export default Nave;