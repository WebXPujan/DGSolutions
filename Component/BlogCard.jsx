import {useContext,useState} from 'react';
import Link from 'next/link';
import {GlobalContext} from '../context/GlobalContext'
import ProgressiveImage from 'react-progressive-graceful-image'
import {gsap} from 'gsap'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

const BlogCard = ({title,desc,img,slug}) => {

    

    const [cursor, setCursor] = useContext(GlobalContext)
    const [error,setError] = useState(false);

    const {data, err} = useSWR(`https://desnepal.com/wp-json/wp/v2/media/${img}`,fetcher)
    
       if (err) return <div>{err.message}</div>
       if (!data) return <div>loading...</div>


   const handleError = (e) => {
       setError(true);
   }
   const handleImgload = (elem) => {
    gsap.to(elem,0.6,{opacity:1,delay:.1});
}
    return (
        <article className="article__card">
            {/* <div className="thumb" style={{background: `#ececec url('${img}') no-repeat`,backgroundSize: "cover"}}>
               
            </div> */}
            <div className="thumb">
                {/* <ProgressiveImage
                    src={img}
                    placeholder=""
                >
                    {(src,loading) => 
                        
                        {
                          loading ? (<div></div>) : (<img src={src} alt={title} onError={handleError} />) 
                        }

                    }
                </ProgressiveImage> */}
                <ProgressiveImage 
                src={data.media_details.sizes.full.source_url} 
                placeholder={data.media_details.sizes.thumbnail.source_url}
                rootMargin="0% 0% 0%"
                threshold={[1]}
                delay={1000}>
                    {src => {

                        return <img src={src} alt={title} onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}} />
                    }

                    }
                </ProgressiveImage>
            </div>
            <div className="excerpt">
                <h1 
                className="title title__article"
                onMouseEnter={() => setCursor("hovered")}
                onMouseLeave={() => setCursor("")}
                >
                    <Link href="/blog/[post]" as={`/blog/${slug}`}>
                        <a>{title}</a>
                    </Link>
                    
                </h1>
                {/* <div dangerouslySetInnerHTML={{__html: desc}} /> */}
                <p className="para">{desc.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </div>
        </article>
    );
}

export default BlogCard;
