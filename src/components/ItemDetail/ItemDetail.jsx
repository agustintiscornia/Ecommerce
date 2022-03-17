import ItemCount from '../ComponenteItemCount/ItemCount'
import '../styles/Nav.css'



function ItemDetail({productos}) {

  const onAdd=(cantidad)=>{
    console.log(cantidad)
  }

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
          <ItemCount  init={1} stock={10} onAdd={onAdd}/> 
        </div>
        </div>
    </div>
  )
}

export default ItemDetail