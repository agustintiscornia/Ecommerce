import React from 'react'
import {Card} from 'react-bootstrap'
import {Button}from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'


function Item(prod) {
return (
    <div> 
    <Card className='card'>
<Card.Img variant="top" className='imagenItem' src={prod.imagen} />
<Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    <h2>{prod.producto}</h2>
    </Card.Text>
    <Card.Text>
        {prod.precio}$
    </Card.Text>
    <Link to={`/detalle/${prod.id}`}>
    <Button variant="dark">detalle del producto</Button>
    </Link>
</Card.Body>
</Card>
    
</div>
)
}

export default Item