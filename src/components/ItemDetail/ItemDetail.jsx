import React from 'react'

function ItemDetail({productos}) {
  return (
    <div>
      <div className='titulosItem'>{productos.title}</div>,
        {productos.talle},
        {productos.producto} 
    </div>
  )
}

export default ItemDetail