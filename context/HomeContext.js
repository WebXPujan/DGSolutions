import {createContext} from 'react';
export const HomeContext = createContext();
export const HomeProvider = props => {

    const data = [{
        services:[
            {name: "Website Development"},
            {name: "Google Adwords"},
            {name: "Build SaaS"},
            {name: "Creative Strategy"},
            {name: "Search Engine Optimization"},
            {name: "Social Media Strategy"}

        ]
    }];

    
    return(
        <HomeContext.Provider value={data}>
            {props.children}
        </HomeContext.Provider>
    );
}