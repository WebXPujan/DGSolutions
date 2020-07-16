import {createContext, useState} from 'react'
export const CursorContext = createContext()
export const CursorProvider = props => {
    const [mousePos,setMousePos] = useState({
        x:0,
        y:0
    })
    return(
        <CursorContext.Provider value={[mousePos,setMousePos]}>
            {props.children}
        </CursorContext.Provider>
    )
}