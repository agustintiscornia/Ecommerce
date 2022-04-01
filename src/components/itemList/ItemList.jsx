import React from 'react'
import Item from '../Item/Item'


function ItemList({productos}) {
return (
< div className='containerItemList'>
{
    productos.map((prod)=><Item key={prod.id} id={prod.id} title={prod.title} imagen={prod.imagen} producto={prod.producto}talle={prod.talle}/>)
}
</div>
)}

export default ItemList