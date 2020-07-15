import {useContext,useState} from 'react';
import {HomeContext} from '../context/HomeContext';
import Button from '../Component/Button';
import { AnimatePresence,motion } from 'framer-motion';
const Services = () => {

    const data = useContext(HomeContext);

    const [isClicked,setClick] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (event,index) => {
        event.preventDefault();
        setClick(true);
        setActiveIndex(index);
    }
    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};
    const slideUp = {
            initial: {
                opacity: 0,
                y: "10%"
            },
            animate: {
            opacity: 1,
            y: 0,
            transition: {duration:1,ease:transition.ease}
            }
        
    }

    const img = {
        initial: {
            opacity: 0
        },
        fadeInUp: (custom) => {
            return {
                opacity: 1,
                transition: {delay:.5+(custom/4),duration:1,ease:transition.ease}
            }
        }
    }

    
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
                                    <li key={i} className={i === activeIndex ? "active" : ""}>
                                <a href="" className="dg-link" onClick={(e)=>handleClick(e,i)}>
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
                  {
                      !isClicked && (
                        <div className="video" style={{width: "100%",height: "500px",background:"#e1e1e1"}}></div>
                      )
                  }
                    
              </div>
            </div>
        </div>
        <section className="offset">
            {
                isClicked && (
                    <AnimatePresence exitBeforeEnter>
                    <motion.div exit={{opacity:0,y:"0%"}} enter={{opacity:1}} className="wrap" key={data[0].services[activeIndex].id}>
                        <div className="info">
                <motion.h1 initial="initial" animate="animate" variants={slideUp} className="black title title__big big">{data[0].services[activeIndex].name}</motion.h1>
                <motion.p initial="initial" animate="animate" variants={slideUp} className="para">{data[0].services[activeIndex].desc}</motion.p>
                            <motion.p 
                            initial="initial"
                            animate="animate"
                            variants={slideUp}
                            >
                                <Button type="normal" title="Get Details"/>
                            </motion.p>
                        </div>
                        <div className="slider">
                            <ul>
                                {
                                    data[0].services[activeIndex].images.map((image,i) => (
                                        <motion.li variants={img} animate="fadeInUp" custom={i} initial="initial" className="list-items" key={i}>
                                            <div className="thumb">
                                                <img src={image.url} alt={image.alt} />
                                            </div>
                                        </motion.li>
                                    ))
                                }
                                
                                
                            </ul>
                        </div>
                    </motion.div>
                    </AnimatePresence>

                )
            }
            
        </section>
    </section>
    );
}
export default Services;