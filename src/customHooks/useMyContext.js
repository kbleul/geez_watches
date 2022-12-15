import { useContext } from "react"
import { LocationContext } from "../context/locationContext"
import { CardContext } from "../context/cardContext"



export const useLocationContext = () => {
    const context = useContext(LocationContext)

    if(!context) {
        throw Error("useLocationContext must be used inside of a LocationContextProvider")
    }

    return context
}


export const useCartContext = () => {
    const context = useContext(CardContext)

    if(!context) {
        throw Error("useCardContext must be used inside of a CardContextProvider")
    }

    return context
}