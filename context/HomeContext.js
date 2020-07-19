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

    },
    {
      trustee: [
          {
              client_name: "client1",
              logo: "imagepath"
          },
          {
            client_name: "client2",
            logo: "imagepath"
        },
        {
            client_name: "client3",
            logo: "imagepath"
        },
        {
            client_name: "client4",
            logo: "imagepath"
        },
        {
            client_name: "client5",
            logo: "imagepath"
        },
        {
            client_name: "client6",
            logo: "imagepath"
        },
        {
            client_name: "client7",
            logo: "imagepath"
        },
        {
            client_name: "client8",
            logo: "imagepath"
        },
        {
            client_name: "client9",
            logo: "imagepath"
        }
      ]  
    },
    {
       testimonials: [
           {
               client_name: "John Doe",
               client_company: "Hongshi Cement",
               client_post: "CEO",
               testimonial: "lorem blah blah blah",
               title: "Excellent & Exceptional Result",
               case_study: "/project/hongshi-cement",
               client_img: "https://unsplash.it/1366"
           },
            {
                client_name: "Janny Doe",
                client_company: "Hard Rock",
                client_post: "CEO",
                testimonial: "lorem blah blah blah",
                title: "Excellent & Exceptional Result",
                case_study: "/project/hard-rock",
                client_img: "https://unsplash.it/1367"
            },
            {
                client_name: "Josheph Doe",
                client_company: "Infocus",
                client_post: "CEO",
                testimonial: "lorem blah blah blah",
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