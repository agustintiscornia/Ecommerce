import { useState } from 'react';

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
        
        <button onClick={decrease}>-</button>
        <div>{count}</div>
        <button onClick={increase}>+</button>
        <br /><br />
        <button onClick={addCarrito}> Agregar al carrito</button>
    </div>
    );
}
export default ItemCount