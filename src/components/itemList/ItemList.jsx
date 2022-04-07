import React from 'react'
import Item from '../Item/Item'


function ItemList({productos}) {
return (
< div className='containerItemList'>
{
    productos.map((prod)=><Item key={prod.id} id={prod.id} imagen={prod.imagen} producto={prod.producto} precio={prod.precio}/>)
}
</div>
)}

export default ItemList