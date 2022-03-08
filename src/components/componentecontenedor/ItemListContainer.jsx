import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
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


export default function ItemListContainer() {
  const array = [
    { id: '1', productos: 'remera',imagen:"http://www.rhysto.com.ar/productos/remeras1.jpg", talle: ' talle:M' },
    { id: '2', productos: 'pantalon',imagen:"http://yale.devandtest.net/image/cache/catalog/collection/jeans/01-0853-0692-14-200x200.jpg", talle: 'talle:L'},
    { id: '3', productos: 'campera', imagen:"https://www.nakaoutdoors.com.ar/img/articulos/marmot_venus_jacket_thumb1.jpg",talle: 'talle:L' },
  ];

  const getFetch = new Promise((resolve, reject) => {
    let url = array;
    if (url === array) {
      setTimeout(()=>{
        resolve(array);
      },2000)
    } else {
      reject('404 error');
    }
  })

  const [productos, setProductos] = useState([])


  useEffect(() => {
    getFetch.then(
      (response) => setProductos(response),
      (error) => console.log(error)
    );
}, [])
  
  
console.log(productos)

  return(
  <>
    <ItemList array={productos}/>
  </>
  ) 
} 

