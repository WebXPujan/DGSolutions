import Button from '../Component/Button';
const Blog = () => {
    return(
        <section id="blog" className="sections">
        <div className="container">
            <div className="columns">
                <div className="col-12">
                    <h1 className="title title__big big centered title__border">News & Blog</h1>
                </div>
                <div className="col-12 news-wrap">
                    <article className="article__card">
                        <div className="thumb"></div>
                        <div className="excerpt">
                            <h1 className="title title__article">Apple Rolled Out iOS 13.5 With COVID-19 Exposure Alert Support</h1>
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores, in quae vel eveniet accusantium</p>
                        </div>
                    </article>
                    <article className="article__card">
                        <div className="thumb"></div>
                        <div className="excerpt">
                            <h1 className="title title__article">Apple Rolled Out iOS 13.5 With COVID-19 Exposure Alert Support</h1>
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores, in quae vel eveniet accusantium</p>
                        </div>
                    </article>
                    <article className="article__card">
                        <div className="thumb"></div>
                        <div className="excerpt">
                            <h1 className="title title__article">Apple Rolled Out iOS 13.5 With COVID-19 Exposure Alert Support</h1>
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores, in quae vel eveniet accusantium</p>
                        </div>
                    </article>
                    <article className="article__card">
                        <div className="thumb"></div>
                        <div className="excerpt">
                            <h1 className="title title__article">Apple Rolled Out iOS 13.5 With COVID-19 Exposure Alert Support</h1>
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores, in quae vel eveniet accusantium</p>
                        </div>
                    </article>
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