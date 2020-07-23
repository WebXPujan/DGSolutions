import {createContext} from 'react';
export const HomeContext = createContext();
export const HomeProvider = props => {

    const data = [{
        services:[
            {
                id: "website-development",
                name: "Website Development",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
                ],
                icon: "website.svg"
            },
            {
                id: "creative-strategy",
                name: "Creative Strategy",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
                ],
                icon: "creative.svg"
            },
            {
                id: "google-adwords",
                name: "Google Adwords",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
                ],
                icon: "googleadwords.svg"
            },
            {
                id: "build-saas",
                name: "Build SaaS",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
                ],
                icon: "buildsaas.svg"
            },
            {
                id: "search-engine-optimization",
                name: "Search Engine Optimization",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
                ],
                icon: "seo.svg"
            },
            {
                id: "social-media-strategy",
                name: "Social Media Strategy",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
                ],
                icon: "socialmedia.svg"
            }

        ]

    },
    {
      trustee: [
          {
              client_name: "prazada",
              logo: "prazada.jpg"
          },
          {
            client_name: "folliderm",
            logo: "folliderm.jpg"
        },
        {
            client_name: "genese",
            logo: "genese.jpg"
        },
        {
            client_name: "infocus",
            logo: "infocus.jpg"
        },
        {
            client_name: "hongshi",
            logo: "hongshi.jpg"
        },
        {
            client_name: "reanda",
            logo: "reanda.jpg"
        },
        {
            client_name: "vianet",
            logo: "vianet.jpg"
        },
        {
            client_name: "remax",
            logo: "remax.jpg"
        },
        {
            client_name: "iims",
            logo: "iims.jpg"
        }
      ]  
    },
    {
       testimonials: [
           {
               client_name: "John Doe",
               client_company: "Hongshi Cement",
               client_post: "CEO",
               testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
               title: "Excellent & Exceptional Result",
               case_study: "/project/hongshi-cement",
               client_img: "https://unsplash.it/1366"
           },
            {
                client_name: "Janny Doe",
                client_company: "Hard Rock",
                client_post: "CEO",
                testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                title: "Excellent & Exceptional Result",
                case_study: "/project/hard-rock",
                client_img: "https://unsplash.it/1367"
            },
            {
                client_name: "Josheph Doe",
                client_company: "Infocus",
                client_post: "CEO",
                testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                title: "Excellent & Exceptional Result",
                case_study: "/project/infocus",
                client_img: "https://unsplash.it/1368"
            }
       ] 
    }];

    
    return(
        <HomeContext.Provider value={data}>
            {props.children}
        </HomeContext.Provider>
    );
}