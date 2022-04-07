import { useState } from 'react';
import {Button}from 'react-bootstrap'

const ItemCount=({init, stock, onAdd})=> {


    const [count, setCount] = useState(init) ;


    const increase = () => {
        if(count<stock){
        setCount(count + 1)
    }
}
    const decrease = () => {
        if(count>init){
        setCount (count - 1)
    }
}

const addCarrito=()=>{
    console.log(`Agrego al carrito ${count} unidades`)
    onAdd(count)
}



    return (
    <div className='botones'>
        
        <Button onClick={decrease} variant="dark">-</Button> <Button onClick={increase} variant="dark">+</Button>
        <div>{count}</div>
        <br />
        <Button onClick={addCarrito} variant="warning" > Agregar al carrito</Button>
        
    </div>
    );
}
export default ItemCount