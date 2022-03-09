import React from 'react'
import Item from '../Item/Item'


function ItemList({productos}) {
return (
    productos.map((prod)=><Item key={prod.id} title={prod.title} imagen={prod.imagen} producto={prod.producto}talle={prod.talle}/>
)
)}

export default ItemList