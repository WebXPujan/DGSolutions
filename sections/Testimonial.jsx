import Button from '../Component/Button';
const Testimonial = () => {
    return(
        <section className="sections has-offset" id="testimonials">
        <div className="container">
            <div className="columns">
                <div className="column col-7 col-md-12">
                    <h1 className="black title title__big title__border big">Thoughts of our clients</h1>
                    <ul className="testi-slider">
                        <li className="list-items">
                            <div className="wrap">
                                <h1 className="title title__big big">Excellent & Exceptional Results</h1>
                                <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur ea. Excepturi eaque debitis ea eum voluptatem doloribus, explicabo adipisci a distinctio commodi harum consequuntur similique veniam accusamus, blanditiis dignissimos?</p>
                            </div>
                            <div className="info">
                                <div className="client-details">
                                    <h1 className="green title title__big text-capitalize">John Doe</h1>
                                    <p className="black subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>CEO, Clabs</p>
                                </div>
                                <div className="cta">
                                    <Button type="normal" title="View Case Study"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="indicator">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="column col-5 col-md-12"></div>
            </div>
        </div>
        <section className="offset">
            <ul>
                <li>
                        <div className="client-image">
                            <img src="./images/client.png" alt="John Doe"/>
                            <span className="rect"></span>
                        </div>
                   
                </li>
            </ul>
        </section>
    </section>
    )
}
export default Testimonial;