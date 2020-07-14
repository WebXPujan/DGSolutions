import {useContext} from 'react';
import {HomeContext} from '../context/HomeContext';
import Button from '../Component/Button';
const Services = () => {

    const data = useContext(HomeContext);
    return(
        <section className="sections has-offset" id="services">
        <div className="container">
            <div className="columns">
              <div className="column col-md-12">
                <div className="hero-content">
                    <h1 className="black title title__big title__border big">So what do we do exactly?</h1>
                   
                    <div className="services-item">
                        <ul>
                            {
                                data[0].services.map((service,i)=>(
                                    <li key={i}>
                                <a href="" className="dg-link">
                                    <span className="icons left"></span>
                                <h1 className="black title title__small big">{service.name}</h1>
                                    <span className="icons right">
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}}>
                                        <g>
                                        <g>
                                        <path d="M390.595,281.767c-3.206-5.581-9.139-9.02-15.569-9.02H136.969c-6.43,0-12.363,3.439-15.563,9.02
                                        c-3.2,5.581-3.17,12.441,0.078,17.992l119.028,203.365c3.218,5.497,9.115,8.876,15.486,8.876c6.37,0,12.268-3.385,15.492-8.876
                                        l119.022-203.365C393.759,294.209,393.801,287.348,390.595,281.767z M255.997,458.527l-87.734-149.892h175.462L255.997,458.527z"
                                        />
                                        </g>
                                        </g>
                                        <g>
                                        <g>
                                        <path d="M255.997,0c-9.911,0-17.944,8.033-17.944,17.944v272.748c0,9.911,8.033,17.944,17.944,17.944
                                        c9.911,0,17.944-8.033,17.944-17.944V17.944C273.941,8.033,265.908,0,255.997,0z"/>
                                        </g>
                                        </g>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
              </div>
              <div className="column col-md-12">
                    <div className="video" style={{width: "100%",height: "500px",background:"#e1e1e1"}}></div>
              </div>
            </div>
        </div>
        <section className="offset">
            <div className="info">
                <h1 className="black title title__big big">Website Development</h1>
                <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. sequi enim, a vero porro repudiandae quibusdam error molestiae.</p>
                <p>
                    <Button type="normal" title="Get Details"/>
                </p>
             </div>
             <div className="slider">
                 <ul>
                     <li className="list-items">
                         <div className="thumb"></div>
                     </li>
                     <li className="list-items">
                        <div className="thumb"></div>
                    </li>
                    <li className="list-items">
                        <div className="thumb"></div>
                    </li>
                    <li className="list-items">
                        <div className="thumb"></div>
                    </li>
                    <li className="list-items">
                        <div className="thumb"></div>
                    </li>
                 </ul>
             </div>
        </section>
    </section>
    );
}
export default Services;