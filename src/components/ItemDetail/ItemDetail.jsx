import { Link } from 'react-router-dom'
import ItemCount from '../ComponenteItemCount/ItemCount'
import { useState } from 'react'
import '../styles/Nav.css'
import { useCartContext } from '../../context/cartContext'



function ItemDetail({productos}) {

  const[count,setCount]=useState(null)


  const{addCarrito,cartList}=useCartContext()

  const onAdd=(cantidad)=>{
    console.log(cantidad)
    setCount(cantidad)
    addCarrito({...productos, cant:cantidad})
  }
  console.log(cartList)
  return (

    
    <div>
      <h1>{productos.title}</h1>
        <div className='containerItem'>
        <div className='containerItemhijo'>
        <img className='imagendetail' src={productos.imagen} alt="" />
      </div>
        <div className='containerItemhijo2'>
          <p>{productos.descripcion}</p>
          
          {productos.talle}
          <br />
          <span>{productos.precio} </span>

        {count ?
          <Link to='/cart'>
          <button variant='secondary'>terminar compra</button>
          </Link>
          :
          <ItemCount  init={1} stock={10} onAdd={onAdd}/> 

        } 

        </div>
        </div>
    </div>
  )
}

export default ItemDetail