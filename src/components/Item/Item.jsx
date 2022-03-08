import React from 'react'
import {Card} from 'react-bootstrap'
import {Button}from 'react-bootstrap'

function Item(prod) {
return (
    <div> 
    key={prod.id}
    <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={prod.imagen} />
<Card.Body>
    <Card.Title>Vixis</Card.Title>
    <Card.Text>
    {prod.productos}-{prod.talle}
    </Card.Text>
    <Button variant="secondary">detalle del producto</Button>
</Card.Body>
</Card>
    
</div>
)
}

export default Item