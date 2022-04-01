import { addDoc,collection, getFirestore} from 'firebase/firestore'
import { useCartContext} from '../../context/cartContext'

function Cart() {

    const{cartList,VaciarCart,removeItem,precioTotal}= useCartContext()
console.log(cartList)

const generarOrden=async()=>{

  let orden = {}

  orden.buyer = {name:"agustin" , phone:"1139199467" , email:"agustin@gmail.com" }
  orden.total= precioTotal();

  orden.items = cartList.map(cartItem =>{

    const id = cartItem.id;
    const producto  = cartItem.producto ;
    const precio  = cartItem.precio * cartItem.cantidad ;

    return {id,producto,precio}

  })
  
  console.log(orden)

  const db = getFirestore()
      const queryCollectionSet = collection(db, 'orders')
      addDoc(queryCollectionSet, orden)
      .catch(err => console.error(err))
      .finally(() => console.log('termino '))

}

  return (
    <div>
      <h1>Carrito</h1>
      <p>Revise su compra por favor!</p>
      
      {cartList.map(prod=><div className='containerCart-row'>

        <ul>producto: {prod.producto}</ul>
        <ul>talle:{prod.talle}</ul>
        <ul>precio:{prod.precio}$</ul>
        <ul>cantidad :{prod.cant}</ul>

        <button onClick={()=> removeItem(prod.id)}> X </button>
      </div>)}
      <div> preciototal: {precioTotal()}</div>
      <button onClick={VaciarCart}>vaciar carrito</button>
      <button onClick={generarOrden}>Terminar compra</button>
    </div>
  )
}

export default Cart