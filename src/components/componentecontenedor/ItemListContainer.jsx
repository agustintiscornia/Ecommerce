import React, { useState } from 'react'
import { useEffect } from 'react';

/*
const ItemListContainer = ({titulo}) => {
  return (
    <div className='titulo'>
        <h1>{titulo}</h1>
    </div>
  )
}

export default ItemListContainer */


export default function ItemListContainer() {
  const array = [
    { id: '1', productos: 'remera', talle: 'm', stock: '3' },
    { id: '2', productos: 'pantalon', talle: 'l', stock: '4' },
    { id: '3', productos: 'campera', talle: 'l', stock: '6' },
  ];

  const getFetch = new Promise((resolve, reject) => {
    let url = array;
    if (url === array) {
      resolve(array);
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

  return <div>
    {array.map((prod)=><div
    key={prod.id}
    <div className="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    )}
  </div>;
}