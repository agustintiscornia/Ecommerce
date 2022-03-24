import { createContext, useState,useContext } from "react"

const CartContext= createContext([])

    export const useCartContext= () => useContext(CartContext)



    function CartContextProvider({children}){
        const [cartList, setCartList] = useState([])


        const agregarCart=(prod)=>{

        setCartList([ ...cartList,prod])

    }

    const VaciarCart=()=>{

        setCartList([])
    }

    
    return(

        <CartContext.Provider  value={{

            cartList,
            agregarCart,
            VaciarCart
        }}>
            {children}
        </CartContext.Provider>


    )
}

export default CartContextProvider