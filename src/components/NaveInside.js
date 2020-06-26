import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import './Components.css'

import {
    Link
  } from "react-router-dom";

function NaveInside(){    
  return(
    <div className="place-title border-bottom body" >
    <h1 className="title">TechProcess</h1>
    <Navbar expand="lg">
    <Navbar.Toggle aria-controls="bottom" />
    <Navbar.Collapse id="bottom"  className="justify-content-center">
      <Nav>
        <Link className="nav-link menu" to="/app">Home </Link>
        <NavDropdown title="Institucional" className=" menu" >
          <Link className="dropdown-item">Normas</Link>
          <Link className="dropdown-item">Código de Ética </Link>
          <Link className="dropdown-item">Experiência do Cliente</Link>
          <Link className="dropdown-item" to="/sharedoc"> Documentos Compartilhados</Link>
        </NavDropdown>
        <NavDropdown title="Cultura" className=" menu" >
          <Link className="dropdown-item" to="/whoweare">Quem Somos</Link>
          <Link className="dropdown-item" to="/mission">Missão</Link>
          <Link className="dropdown-item">Visão</Link>
          <Link className="dropdown-item" to="/values">Valores</Link>
        </NavDropdown>
        <Link className="nav-link menu" to="/login">Noticias </Link>
        <NavDropdown title="RH" className=" menu" >
          <Link className="dropdown-item">Indica</Link>
          <Link className="dropdown-item">Portal do Colaborador</Link>
          <Link className="dropdown-item">Benefícios</Link>
          <Link className="dropdown-item">Valores</Link>
        </NavDropdown>
    
        <Link className="nav-link menu" to="/login">IT</Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NaveInside;