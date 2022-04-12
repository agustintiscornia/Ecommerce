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


    const{cartList,clearCart,removeItem,totalPrice}= useCartContext()

const makeOrder=async(e)=>{
  e.preventDefault();
  let order = {}

  order.buyer = dataForm
  order.total= totalPrice();

  order.items = cartList.map(cartItem =>{

    const id = cartItem.id;
    const product  = cartItem.product ;
    const price  = cartItem.price * cartItem.count ;

    return {id,product,price}

  })
  

  const db = getFirestore()
      const queryCollectionSet = collection(db, 'orders')
      addDoc(queryCollectionSet, order)
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
        <Button onClick={clearCart} variant='warning' className='vaciarcarrito'>vaciar carrito</Button>
        <h1 className='carritotitulo'>Carrito</h1>
  
        {cartList.map(prod=> 
        <div className='containerCart'> 
        <div><img className='cartImagen' src={prod.image} alt="" /></div>
        <div> {prod.product}</div>
        <div>{prod.quantity}</div>
        <div>{prod.price}$</div> 
      <Button onClick={()=> removeItem(prod.id)} variant='warning'> X </Button>
      
      </div>)}
  <br /><br />
      <div className='totalPrice'> Precio Total: {totalPrice()}$</div> 
  <br />
        {/* form */}
        
        <form className='formCart'
                  onSubmit={makeOrder}                 
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