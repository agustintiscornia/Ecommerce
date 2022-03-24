import { useCartContext } from '../../context/cartContext'

function Cart() {

    const{cartList,VaciarCart}= useCartContext()
console.log(cartList)
  return (
    <div>
      <h1>Carrito</h1>
      <p>Revise su compra por favor!</p>
      
      {cartList.map(prod=><div className='containerCart'>

        <li>{prod.producto}</li>
        <li>{prod.talle}</li>
        <li>{prod.precio}$</li>
      </div>)}

      <button onClick={VaciarCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart