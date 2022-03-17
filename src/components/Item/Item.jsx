import React from 'react'
import {Card} from 'react-bootstrap'
import {Button}from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'


function Item(prod) {
return (
    <div className='containerItemm'> 
    <Card style={{ width: '12rem'}}>
<Card.Img variant="top" src={prod.imagen} />
<Card.Body>
    <Card.Title>{prod.title}</Card.Title>
    <Card.Text>
    {prod.producto}-{prod.talle}
    </Card.Text>
    <Link to={`detalle/${prod.id}`}>
    <Button variant="secondary">detalle del producto</Button>
    </Link>
</Card.Body>
</Card>
    
</div>
)
}

export default Item