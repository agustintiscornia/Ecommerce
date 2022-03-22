import { useCartContext } from '../../context/cartContext'

function Cart() {

    const{cartList,VaciarCart}= useCartContext()
console.log(cartList)
  return (
    <div>
      {cartList.map(prod=><li>{prod.producto}{prod.imagen}</li>)}

      <button onClick={VaciarCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart