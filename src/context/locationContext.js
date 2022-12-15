import { createContext , useState } from "react"

export const LocationContext = createContext()

const LocationContextProvider = ({ children }) => {

    const [ whereAmI , set_whereAmI ] = useState([])


    return( 
    <LocationContext.Provider value = { [ whereAmI , set_whereAmI ] }>
        { children }
    </LocationContext.Provider> )
}

export default LocationContextProvider