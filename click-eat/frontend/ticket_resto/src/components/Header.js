import React from 'react';
import { Navbar, Container, Button, Card } from 'react-bootstrap';
import ima1 from '../assets/ima1.png';
import './header.css'

function Header() {
  return (
    <Navbar  expand="lg" className="shadow-sm  mod-head">
      <a href="/" className="fleche">&lt;</a>
      
      <Container>
        <Navbar.Brand href="/" className="logo-text">
        Click <span className="logo-accent">&</span> Eat
      </Navbar.Brand>
        <Button variant="success" className="deconnect">Deconnexion</Button>
      </Container>
    </Navbar>
  );
}

export default Header;