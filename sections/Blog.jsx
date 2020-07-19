import {useEffect,useState} from 'react';
import Button from '../Component/Button';
import BlogCard from '../Component/BlogCard';
import useSWR from 'swr';


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }


const Blog = ({setLoading}) => {
    const [isLoaded,loaded] = useState(false)
    
        const { data, error } = useSWR(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e6c514c259024fbfa5f9e2de2684fefd`,fetcher)
    
    
       if (error) return <div>{error.message}</div>
       if (!data) return <div>loading...</div>
      
    
  
    return(
        
        <section id="blog" className="sections" onLoad={()=>setLoading(false)}>
        <div className="container">
            <div className="columns">
                <div className="col-12">
                    <h1 className="title title__big big centered title__border">News & Blog</h1>
                </div>
                <div className="col-12 news-wrap">
                    {
                       
                        data.articles.map((post,i)=>(
                            <BlogCard key={i} 
                            title={post.title} 
                            desc={post.description}
                            img={post.urlToImage}
                            />
                        ))
                    }
                </div>
                <div className="col-12 cta">
                    <Button type="normal" title="Explore More"/>
                </div>
            </div>
            
        </div>
    </section>
    )
}
export default Blog;