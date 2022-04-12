import React from 'react'
import {Card} from 'react-bootstrap'
import {Button}from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'


function Item(prod) {
return (
    <div> 
    <Card className='card'>
<Card.Img variant="top" className='imagenItem' src={prod.image} />
<Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    <h2>{prod.product}</h2>
    </Card.Text>
    <Card.Text>
        {prod.price}$
    </Card.Text>
    <Link to={`/detail/${prod.id}`}>
    <Button variant="dark">detail del producto</Button>
    </Link>
</Card.Body>
</Card>
    
</div>
)
}

export default Item