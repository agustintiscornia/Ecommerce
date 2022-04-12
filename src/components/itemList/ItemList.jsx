import React from 'react'
import Item from '../Item/Item'


function ItemList({products}) {
return (
< div className='containerItemList'>
{
    products.map((prod)=><Item key={prod.id} id={prod.id} image={prod.image} product={prod.product} price={prod.price}/>)
}
</div>
)}

export default ItemList