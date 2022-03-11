
import {useEffect, useState} from 'react'
import { getFetch } from '../../helpers/getFech'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
const[productos,setProductos]=useState({})
    useEffect(() => {
    getFetch
    .then(resp=>setProductos(resp.find(prod=>prod.id === 1)))
    }, [])
    console.log(productos)
  return (
    <div>
        <ItemDetail productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer 