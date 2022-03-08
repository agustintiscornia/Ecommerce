import React from 'react'
import {Navbar} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import CartWidget from './componenteimagen/CartWidget'
import './styles/Nav.css'
function AppNavbar() {
return (
    <div>
  <Navbar bg="dark" variant='dark'>
  <Container>
    <Navbar.Brand className='logo' href="#home">Vixis</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <Nav.Link href="#link">Contactos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <CartWidget/>
</Navbar>
    </div>
)
}

export default AppNavbar