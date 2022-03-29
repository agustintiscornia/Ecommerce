
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {


const[productos,setProductos]=useState({})
const[loading,setLoading]=useState(true)
const {detalleId} = useParams()

    useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'items',detalleId)
    getDoc(queryDb)
    .then(resp=>setProductos( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
    .finally(() =>setLoading(false))

    }, [])
    
    
  return (
    <>
    
      { /* <ItemDetail productos={productos}/>*/}

        {loading ? <p>cargando ...</p>
        
        :
        <ItemDetail productos={productos}/>
        }
    </>
  )
}

export default ItemDetailContainer 