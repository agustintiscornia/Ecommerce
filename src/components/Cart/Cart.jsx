import { addDoc,collection, getFirestore} from 'firebase/firestore'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
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

  orden.buyer = dataForm
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

if (cartList.length === 0) {
  return (
    <section>
      <div className='sectionCart'>
    <h2>Carrito vacio</h2>
    </div>
    <div  className='sectionCart'>
    <NavLink to='/'>
      <Button variant='warning'>Volver al menu de inicio</Button>
    </NavLink>
    </div>
    </section>
  )
  }else{
  
    return (
      <div>
        <Button onClick={VaciarCart} variant='warning' className='vaciarcarrito'>vaciar carrito</Button>
        <h1 className='carritotitulo'>Carrito</h1>
  
        {cartList.map(prod=> 
        <div className='containerCart'> 
        <div><img className='cartImagen' src={prod.imagen} alt="" /></div>
        <div> {prod.producto}</div>
        <div>{prod.cant}</div>
        <div>{prod.precio}$</div> 
      <Button onClick={()=> removeItem(prod.id)} variant='warning'> X </Button>
      
  </div>)}
  <br /><br />
      <div className='preciototal'> Precio Total: {precioTotal()}$</div> 
  <br />
        {/* form */}
        
        <form className='formCart'
                  onSubmit={generarOrden}                 
              >
                  <input className='inputCart'
                      type='text' 
                      name='name' 
                      placeholder='name' 
                      value={dataForm.name}
                      onChange={handleChange}
                  /><br />
                  <input className='inputCart'
                      type='text' 
                      name='phone'
                      placeholder='tel' 
                      value={dataForm.phone}
                      onChange={handleChange}
                  /><br/>
                  <input className='inputCart'
                      type='email' 
                      name='email'
                      placeholder='email' 
                      value={dataForm.email}
                      onChange={handleChange}
                  /><br/>
                  <br />
                  <button className='botonCart'>Terminar compra</button>
                  <br />
              </form>
              <br />
              <div className='idcompra'>
              {id.length !== '' && `El id de la compra es: ${id}`}
              </div>
              
      </div>
    )
  }
}

export default Cart