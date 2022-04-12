import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/ItemList';


import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

export function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading,setLoading]=useState(true)
  const {categoryId}=useParams()

  
  useEffect(() => {
    const db = getFirestore()
    if (categoryId) {
        const queryColection = collection(db, 'items')
        const queryFilter = query(queryColection, where('product', '==', categoryId))
        getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    
    }else{
      const queryColection = collection(db, 'items')
      getDocs(queryColection)
      .then(resp => setProducts(resp.docs.map(item=>({ id:item.id, ...item.data()}))))
      .catch(err => console.log (err))
      .finally(()=> setLoading(false))
    }
  }, [categoryId])



  return(
  <>
  
    {loading ? <p>cargando</p> 
    :
    <ItemList products={products}/> 
    }





  </>
  ) 
} 

export default ItemListContainer