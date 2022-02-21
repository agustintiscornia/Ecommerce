import React from 'react'
import {Navbar,Nav,} from 'react-bootstrap'

function AppNavbar() {
return (
    <div>
        <Navbar bg="Light" expand="lg">
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
</Navbar>
    </div>
)
}

export default AppNavbar