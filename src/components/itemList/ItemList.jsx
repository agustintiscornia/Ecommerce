import React from 'react'
import Item from '../Item/Item'


function ItemList({array}) {
return (
    array.map((prod)=><Item key={prod.id} prod={prod}/>
)
)}

export default ItemList