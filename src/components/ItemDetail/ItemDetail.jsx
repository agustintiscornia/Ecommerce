import { Link } from 'react-router-dom'
import ItemCount from '../ComponenteItemCount/ItemCount'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import '../styles/Nav.css'
import { useCartContext } from '../../context/cartContext'



function ItemDetail({products}) {

  const[count,setCount]=useState(null)


  const{addToCart,cartList}=useCartContext()

  const onAdd=(count)=>{
    console.log(count)
    setCount(count)
    addToCart({...products, quantity:count})
  }
  console.log(cartList)
  return (

    
    <div>
      <h1>{products.title}</h1>
        <div className='containerItem'>
        <div className='containerItemhijo'>
        <img className='imagendetail' src={products.image} alt="" />
      </div>
        <div>
          <h3>{products.description}</h3>
          
          <p>Precio: {products.price} </p>
          <br />
        {count ?
          <Link to='/cart'>
          <Button variant="warning">terminar compra</Button>
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