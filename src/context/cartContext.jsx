import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const addToCart = (prod) => {

    if (isInCart(prod.id)) {
        let itemIndex = cartList.findIndex((item)=> item.id === prod.id)
        /*quantityidad de producto existente + mas cantidad de producto agregado*/
    let cantidadsumadas = cartList[itemIndex].quantity += prod.quantity
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

    const totalItem = () => {
    let unidad= cartList.reduce((acum , prod) => (acum = acum + prod.quantity), 0);
    return unidad
    };


    const totalPrice=()=>{

        return cartList.reduce((acum,prod) => (acum = acum + prod.quantity * prod.price),0);
    }


    const clearCart = () => {
    setCartList([]);
    };

    return (
    <CartContext.Provider
    value={{
        cartList,
        addToCart,
        clearCart,
        removeItem,
        totalItem,
        totalPrice
    }}
    >
    {children}
    </CartContext.Provider>
    );
}

export default CartContextProvider;
