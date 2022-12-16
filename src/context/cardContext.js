import { createContext , useState } from "react"

export const addToCart = (id , myCart , set_myCart ) => {

    if(myCart.includes(id)) return


    if(myCart.length === 0)
      {  set_myCart([id])  }
    else {  set_myCart(prev => [id , ...prev]) }
}

export const removeFromCart = ( id , myCart , set_myCart ) => {

    if(myCart.includes(id)) {
        set_myCart(prev => prev.filter(tempP => tempP !== id))
    }

}


export const CardContext = createContext()



const CardContextProvider = ({ children }) => {

    const [ myCart , set_myCart ] = useState([])


    return( 
    <CardContext.Provider value = { [ myCart , set_myCart ] }>
        { children }
    </CardContext.Provider> )
}

export default CardContextProvider

