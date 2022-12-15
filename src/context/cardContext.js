import { createContext , useReducer } from "react"

export const CardContext = createContext()

export const CART_ACTIONS = {
    "ADDTO" : "ADDTO",
    "DELETEFROM" : "DELETEFROM",
}

const set_myCart = ( state , action ) => {
    
    switch(action.type) {
        case CART_ACTIONS.ADDTO :
            return [...action.payload]

        case CART_ACTIONS.DELETEFROM :
            return state.filter( item => item !== action.payload )
            

        default :  return state
    }
}

const CardContextProvider = ({ children }) => {

    const [ myCart , dispatch_myCart ] = useReducer(set_myCart , [])


    return( 
    <CardContext.Provider value = { [ myCart , dispatch_myCart ] }>
        { children }
    </CardContext.Provider> )
}

export default CardContextProvider