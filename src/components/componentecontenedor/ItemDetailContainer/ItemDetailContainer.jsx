
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {


const[products,setproducts]=useState({})
const[loading,setLoading]=useState(true)
const {detailId} = useParams()

    useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'items',detailId)
    getDoc(queryDb)
    .then(resp=>setproducts( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
    .finally(() =>setLoading(false))

    }, [])
    
    
  return (
    <>
    
      { /* <ItemDetail products={products}/>*/}

        {loading ? <p>cargando ...</p>
        
        :
        <ItemDetail products={products}/>
        }
    </>
  )
}

export default ItemDetailContainer 