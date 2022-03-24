import { useCartContext } from '../../context/cartContext'

function Cart() {

    const{cartList,VaciarCart}= useCartContext()
console.log(cartList)
  return (
    <div>
      <h1>Carrito</h1>
      <p>Revise su compra por favor!</p>
      
      {cartList.map(prod=><div className='containerCart-row'>

        <ul>{prod.producto}</ul>
        <ul>{prod.talle}</ul>
        <ul>{prod.precio}$</ul>
      </div>)}

      <button onClick={VaciarCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart