import { useCartContext} from '../../context/cartContext'

function Cart() {

    const{cartList,VaciarCart,removeItem,precioTotal}= useCartContext()
console.log(cartList)



  return (
    <div>
      <h1>Carrito</h1>
      <p>Revise su compra por favor!</p>
      
      {cartList.map(prod=><div className='containerCart-row'>

        <ul>{prod.producto}</ul>
        <ul>{prod.talle}</ul>
        <ul>{prod.precio}$</ul>
        <ul>{prod.cant}cantidad</ul>

        <button onClick={()=> removeItem(prod.id)}> X </button>
      </div>)}

      <button onClick={VaciarCart}>vaciar carrito</button>
      <div>{precioTotal()} precio</div>
    </div>
  )
}

export default Cart