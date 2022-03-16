
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFech'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {


const[productos,setProductos]=useState({})
const {detalleId} = useParams()

    useEffect(() => {
    getFetch
    .then(resp=>setProductos(resp.find(prod=>prod.id === detalleId)))
    }, [])
    
    
  return (
    <div>
        <ItemDetail productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer 