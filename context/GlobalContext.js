import {createContext, useState} from 'react';
export const GlobalContext = createContext();
export const GlobalProvider = props => {

    const [cursor, setCursor] = useState('');
    


    return(
        <GlobalContext.Provider value={[cursor,setCursor]}>
            {props.children}
        </GlobalContext.Provider>
    );
}