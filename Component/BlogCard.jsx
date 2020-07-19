import {useContext} from 'react';
import Link from 'next/link';
import {GlobalContext} from '../context/GlobalContext'
import ProgressiveImage from 'react-progressive-graceful-image'

const BlogCard = ({title,desc,img}) => {

    const [cursor, setCursor] = useContext(GlobalContext)

    return (
        <article className="article__card">
            {/* <div className="thumb" style={{background: `#ececec url('${img}') no-repeat`,backgroundSize: "cover"}}>
               
            </div> */}
            <div className="thumb">
                <ProgressiveImage
                    src={img}
                    placeholder=""
                    rootMargin="0% 0% 0%"
                    threshold={[1]}
                    delay={1000}
                >
                    {src => <img src={src} alt={title} />}
                </ProgressiveImage>
            </div>
            <div className="excerpt">
                <h1 
                className="title title__article"
                onMouseEnter={() => setCursor("hovered")}
                onMouseLeave={() => setCursor("")}
                >
                    <Link href="/blog/[post]" as="/blog/abc">
                        <a>{title}</a>
                    </Link>
                    
                </h1>
                <p className="para">{desc}</p>
            </div>
        </article>
    );
}

export default BlogCard;
