import { addDoc,collection, getFirestore} from 'firebase/firestore'
import { useState } from 'react'
import { useCartContext} from '../../context/cartContext'

function Cart() {

    const [dataForm,setDataForm] = useState({

      email:"", name:"",phone:""
    })

    const [id,setId]=useState('')


    const{cartList,VaciarCart,removeItem,precioTotal}= useCartContext()
console.log(cartList)

const generarOrden=async(e)=>{
  e.preventDefault();
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
      .then(resp=>setId(resp.id))
      .catch(err => console.error(err))
      .finally(() => console.log('termino '))

}

const handleChange = (e) => {
  setDataForm({
    ...dataForm,
    [e.target.name]: e.target.value
})
}


console.log(dataForm)

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
      {/* form */}
      <form 
                onSubmit={generarOrden}                 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                <button>Terminar compra</button>
                
            </form>
              <div>
                {id.length !== '' && `el id de la compra es: ${id}`}
              </div>

    </div>
  )
}

export default Cart