import { useState } from 'react';

export default function ItemCount() {

    const [count, setCount,] = useState(0);

    const handleCount = () => {
    setCount(count + 1);
    };

    const increase = () => {
        setCount(count + 1)
    };

    const decrease = () => {
        setCount (count - 1)
    }

    return (
    <div className='botones'>
        <label>{count}</label>
        <p>Pantalones</p>
        <img src="https://static1.shopoon.fr/catalog/products/6/70/28/67/6/@/7028676-pantalon-timberland-homme-bleu-petrole-32w-32l-180x180-1.jpg" alt="" />
        <button onClick={increase}>+</button><button onClick={decrease}>-</button>
        <button onClick={handleCount}> Agregue su pantalon</button>
    </div>
    );
}
