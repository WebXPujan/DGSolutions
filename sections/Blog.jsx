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


const Blog = ({setLoading,loading}) => {
    const [isLoaded,loaded] = useState(false)
    
       // const { data, error } = useSWR(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e6c514c259024fbfa5f9e2de2684fefd`,fetcher)
        const {data, error} = useSWR('https://desnepal.com/wp-json/wp/v2/posts',fetcher)
    
       if (error) return <div>{error.message}</div>
       if (!data) return <div>loading...</div>
      
    
  
    return(
        
        <section id="blog" className="sections" onLoad={()=>setLoading(!loading)}>
        <div className="container">
            <div className="columns">
                <div className="col-12">
                    <h1 className="title title__big big centered title__border">News & Blog</h1>
                </div>
                <div className="col-12 news-wrap">
                    {
                       
                        data.map((post,i)=>(
                            <BlogCard key={i} 
                            title={post.title.rendered} 
                            desc={post.excerpt.rendered}
                            img={post.featured_media}
                            slug={post.slug}
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