import React from 'react'
import {Navbar} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartWidget from './componenteimagen/CartWidget'
import { useCartContext } from '../context/cartContext'
import './styles/Nav.css'
function AppNavbar() {

const {cantidadTotalItem}=useCartContext()

return (
    <div>
  <Navbar bg="dark" variant='dark'>
  <Container>
    <NavLink className='logo' to="/">Vixis</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink  className='menu' to="/">Home</NavLink>
        <NavLink  className='menu' to="/categoria/remera">remera</NavLink>
        <NavLink  className='menu' to="/categoria/pantalon">pantalon</NavLink>
        <NavLink className='menu' to='/categoria/campera'>campera</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <NavLink to="cart">
    {cantidadTotalItem()}
  <CartWidget/>
  </NavLink>
</Navbar>
    </div>
)
}

export default AppNavbar