import React from 'react'

function ItemDetail({productos}) {
  return (
    <div>
        {productos.talle}, {productos.title},{productos.producto} 
    </div>
  )
}

export default ItemDetail