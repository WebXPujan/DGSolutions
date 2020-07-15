import {createContext} from 'react';
export const HomeContext = createContext();
export const HomeProvider = props => {

    const data = [{
        services:[
            {
                id: "website-development",
                name: "Website Development",
                desc: "lorem blah blah",
                images:[
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ]
            },
            {
                id: "google-adwords",
                name: "Google Adwords",
                desc: "lorem blah blah",
                images:[
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ]
            },
            {
                id: "build-saas",
                name: "Build SaaS",
                desc: "lorem blah blah",
                images:[
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ]
            },
            {
                id: "search-engine-optimization",
                name: "Search Engine Optimization",
                desc: "lorem blah blah",
                images:[
                    {
                        url:"https://unsplash.it/1367",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1368",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1361",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ]
            },
            {
                id: "social-media-strategy",
                name: "Social Media Strategy",
                desc: "lorem blah blah",
                images:[    
                    {
                        url:"https://unsplash.it/1362",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1363",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1364",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1365",
                        alt: ""
                    },
                    {
                        url:"https://unsplash.it/1366",
                        alt: ""
                    }
                ]
            }

        ]
    }];

    
    return(
        <HomeContext.Provider value={data}>
            {props.children}
        </HomeContext.Provider>
    );
}