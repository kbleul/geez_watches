import { createContext , useReducer } from "react"

export const CardContext = createContext()

export const CART_ACTIONS = {
    "ADDTO" : "ADDTO",
    "DELETEFROM" : "DELETEFROM",
}

const set_myCart = ( state , action ) => {
    
    switch(action.type) {
        case CART_ACTIONS.ADDTO :
            return [ action.payload  , ...state ]

        case CART_ACTIONS.DELETEFROM :
            return [ action.payload  , ...state ]
            

        default :
            return state
    }
}

const CardContextProvider = ({ children }) => {

    const [ myCart , dispatch ] = useReducer(set_myCart , [])


    return( 
    <CardContext.Provider value = { [ myCart , dispatch ] }>
        { children }
    </CardContext.Provider> )
}

export default CardContextProvider