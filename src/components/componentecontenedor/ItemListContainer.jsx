import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../helpers/getFech';
import ItemList from '../itemList/ItemList';


/*
const ItemListContainer = ({titulo}) => {
  return (
    <div className='titulo'>
        <h1>{titulo}</h1>
    </div>
  )
}

export default ItemListContainer 
*/

export function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading,setLoading]=useState(true)
  const {categoriaId}=useParams()

  
  useEffect(() => {
    if (categoriaId){
    getFetch
    .then((respuesta)=>{

      return respuesta
    })
      .then((resp) => setProductos(resp.filter(pro=>pro.producto===categoriaId)))
      .catch(err => console.log (err))
      .finally(()=> setLoading(false))
    
    }else{
      getFetch
      .then((respuesta)=>{

        return respuesta
      })
      .then((resp) => setProductos(resp))
      .catch(err => console.log (err))
      .finally(()=> setLoading(false))
    }
  }, [categoriaId])



  return(
  <>
   {/*  <ItemList productos={productos}/> */}

    {loading ? <p>cargando</p> 
    :
    <ItemList productos={productos}/> 
    }





  </>
  ) 
} 

export default ItemListContainer