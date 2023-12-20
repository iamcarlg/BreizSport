import React from "react";
import { NavLink, useNavigate } from "react-router-dom"
import '../styles/components/header.scss';
import {  Nav, Image, Button,ListGroup, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import img from '../../public/img.svg'

export default function Header() {
    return (
<>
        {/* HEADER - NAVBAR */}
  <header>
    <Container fluid className='backgroundnavbar'>
    <Navbar variant="light" >
      <Navbar.Brand  className=''>
        <NavLink to="/">
          <p>s</p>
          <Image src="img.svg" width="200px"></Image>
          
        </NavLink>
      </Navbar.Brand>

      <Nav>      
          <NavLink to="/about" className='nav-link-item'>Accueil</NavLink>
          <NavLink to="/contact" className='nav-link-item'>Nouveautés</NavLink>
          <NavLink to="/signup" className='nav-link-item'>Informations</NavLink>
      </Nav>     
      
      {/* Items right */}
      <Nav>
        <ListGroup className="nav-right">
          <NavLink to="/signup">
            <Button className="nav-btn-item">S'inscrire</Button>
          </NavLink>
          <NavLink to="/login">
            <Button className="nav-btn-item">Se connecter</Button>
          </NavLink>
        </ListGroup>
      </Nav>

    </Navbar>

    </Container>
  </header>
</>
    );
}
