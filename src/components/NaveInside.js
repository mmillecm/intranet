import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Components.css'

import {
    Link
  } from "react-router-dom";

function NaveInside(){    
  return(
    <div className="place-title border-bottom body" >
    <h1 className="title">TechProcess</h1>
    <Navbar >
    <Navbar.Toggle aria-controls="bottom" />
    <Navbar.Collapse id="bottom"  className="justify-content-center">
      <Nav>
        <Link className="nav-link" to="/app">Home </Link>
        <Link className="nav-link" to="/sharedoc">Share Doc</Link>
        <Link className="nav-link" to="/login">Lista de Usuários</Link>
        <Link className="nav-link" to="/login">Teste</Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NaveInside;