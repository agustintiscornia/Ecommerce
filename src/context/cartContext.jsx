import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const addCarrito = (prod) => {

    if (isInCart(prod.id)) {
        let itemIndex = cartList.findIndex((item)=> item.id === prod.id)
        /*cantidad de producto existente + mas cantidad de producto agregado*/
    let cantidadsumadas = cartList[itemIndex].cant += prod.cant
    return cantidadsumadas 
    } else {
        setCartList([...cartList, prod]);
    }
    
    };


    const isInCart=(id)=>{

    return cartList.some((prod)=>prod.id ===id)
    }


    
    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    };

    const cantidadTotalItem = () => {
    let unidad= cartList.reduce((acum , prod) => (acum = acum + prod.cant), 0);
    return unidad
    };


    const precioTotal=()=>{

        return cartList.reduce((acum,prod) => (acum = acum + prod.cant * prod.precio),0);
    }


    const VaciarCart = () => {
    setCartList([]);
    alert("no hay productos en el carrito")
    };

    return (
    <CartContext.Provider
    value={{
        cartList,
        addCarrito,
        VaciarCart,
        removeItem,
        cantidadTotalItem,
        precioTotal
    }}
    >
    {children}
    </CartContext.Provider>
    );
}

export default CartContextProvider;
