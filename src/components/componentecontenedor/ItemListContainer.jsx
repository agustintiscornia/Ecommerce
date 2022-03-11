import React, { useState } from 'react'
import { useEffect } from 'react';
import { getFetch } from '../helpers/getFech';
import ItemList from '../itemList/ItemList';


/*
const ItemListContainer = ({titulo}) => {
  return (
    <div className='titulo'>
        <h1>{titulo}</h1>
    </div>
  )
}

export default ItemListContainer 
*/

export function ItemListContainer() {
  const [productos, setProductos] = useState([])


  useEffect(() => {
    getFetch
    .then((response) => setProductos(response))
    .catch(err => console.log (err))
    .finally(()=> console.log('cargando'))
}, [])
  
  
console.log(productos)

  return(
  <>
    <ItemList productos={productos}/>
  </>
  ) 
} 

export default ItemListContainer