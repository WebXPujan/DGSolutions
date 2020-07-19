import Button from '../Component/Button';
import {CursorContext} from '../context/CursorContext';
import {HomeContext} from '../context/HomeContext';
import { useContext, useRef, useEffect, useState } from 'react';
import MouseMove from '../Hooks/MouseMove';
import {TransitionAnimation} from '../Hooks/TransitionAnimation';


const Testimonial = () => {

    const [mousePos,setMousePos] = useContext(CursorContext);
    const data = useContext(HomeContext);

    
    const [activeIndex, setActiveIndex] = useState(0);
    const [isClicked,setClick] = useState(false);


    const img = useRef(null);
    const rect = useRef(null);

    //importing hooks
    const mousemove = MouseMove();
    const anim = TransitionAnimation();

    useEffect(() => {
        mousemove.setElem([img.current,rect.current])
       // console.log(anim.staggerFadeIn());
    }, []);
    
    const handleMove = () => {
        mousemove.move(mousePos,{
            vertical:false,
            rect: rect.current
        });
    }

    const handleOut = () => {
        mousemove.revertPosition([img.current,rect.current])
    }

    const handleClick = (index) => {
        if(!isClicked){
            setActiveIndex(index);
            setClick(true);
            setTimeout(()=>{
                setClick(false);
            },1000);
        }
       
    }

    return(
        <section className="sections has-offset" id="testimonials">
        <div className="container">
            <div className="columns">
                <div className="column col-7 col-md-12">
                    <h1 className="black title title__big title__border big">Thoughts of our clients</h1>
                    <ul className="testi-slider">
                        
                            
                            
                       
                            <li className={isClicked ? "list-items active slideUpFadeIn" : `active`}>
                                <div className="wrap">
                                    <h1 className="title title__big big" >{data[2].testimonials[activeIndex].title}</h1>
                                    <p className="para">{data[2].testimonials[activeIndex].testimonial}</p>
                                </div>
                                <div className="info">
                                    <div className="client-details">
                                        <h1 className="green title title__big text-capitalize">{data[2].testimonials[activeIndex].client_name}</h1>
                                        <p className="black subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>{data[2].testimonials[activeIndex].client_post}, {data[2].testimonials[activeIndex].client_company}</p>
                                    </div>
                                    <div className="cta">
                                        <Button 
                                        type="normal" 
                                        title="View Case Study" 
                                        link={`/project/[id]`} 
                                        viewas={data[2].testimonials[activeIndex].case_study}
                                        hasSlug={true}

                                        />
                                    </div>
                                </div>
                            </li>
                        
                                
                               
                            
                       
                        
                        
                    </ul>
                    <ul className="indicator">
                        {
                            data[2].testimonials.map((test,i) => (
                                <li className={i === activeIndex ? "active": null} onClick={() => handleClick(i)} key={test.client_company+i} style={{width:`calc(${100/data[2].testimonials.length}% - 5px)`}}></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="column col-5 col-md-12"></div>
            </div>
        </div>
        <section className="offset">
            <ul>
                
                <li>
                        <div className="client-image" 
                        onMouseMove={null}
                        onMouseOut={null}>
                            <img className={isClicked ? "active fadeIn" : `active`} src="/images/client.png" alt={data[2].testimonials[activeIndex].client_name} ref={img}/>
                            <span className={isClicked ? "rect active slideLeftFadeIn" : "rect"} ref={rect}></span>
                        </div>
                   
                </li>
            </ul>
        </section>
    </section>
    )
}
export default Testimonial;