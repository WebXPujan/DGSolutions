import {CursorContext} from '../context/CursorContext'
import {GlobalContext} from '../context/GlobalContext'
import {useContext,useEffect, useRef} from 'react'
import {TweenMax} from 'gsap';
import { HomeContext } from '../context/HomeContext';
const Trustee = () => {

    const [mousePos,setMousePos] = useContext(CursorContext);
    const [cursor,setCursor] = useContext(GlobalContext);
    const data = useContext(HomeContext);


    const border = useRef(null)
    const title = useRef(null)
    const para = useRef(null)
    useEffect(()=>{
        TweenMax.set( border.current, { transformStyle: 'preserve-3d'  });
        TweenMax.set(title.current, { transformStyle: 'preserve-3d'  })
    },[])
    
    const handleMove = () => {
        //console.log(mousePos.x);
        TweenMax.to( 
            border.current, 
            5, 
            {
                 y: -.2 * (((mousePos.y / border.current.clientWidth) * 100) - 50),
                 x: -.2 * (((mousePos.x / border.current.clientHeight) * 100) - 50),

                transformPerspective:100,
                transformOrigin:'center center' 
            })
        TweenMax.to(
                [title.current,para.current],
                5,
                {
                    x: .2 * (((mousePos.x / border.current.clientHeight) * 100) - 50)
                }
            );
       
    }
    const handleOut = () => {
        TweenMax.to( 
            [border.current,title.current,para.current], 
            5, 
            {
                 y: 0,
                 x: 0,

                transformPerspective:0,
                transformOrigin:'center center' 
            });
            //setCursor("");
    }
  
    return(
         
        <section className="sections" id="trustee">
        <div className="container">
            <div className="columns">
              <div className="column col-md-12">
                <div className="hero-content">
                    <div className="info meet draw"
                    onMouseMove={null}
                    onMouseOut={null}
                    onMouseEnter={()=>setCursor("hovered")}
                    ref={border}>
                        <div className="wrap">
                            <h1 className="black title title__big title__border big" ref={title}>Trusted by the world's<br/>leading companies</h1>
                            <p className="para" ref={para}>
                                Asperiores, architecto qui facere ipsam saepe temporibus consequatur accusamus laborum? Alias rem velit quisquam. Voluptas, consectetur quisquam.
                            </p>
                        </div>
                        {/* <span className="line top"></span>
                        <span className="line right"></span>
                        <span className="line bottom"></span>
                        <span className="line left"></span> */}
                    </div>
                   
                    
                </div>
              </div>
              <div className="column col-md-12">
                <div className="trustee">
                    <ul>
                        {
                            data[1].trustee.map((trust,i) => (
                                <li className="list-items" key={i}>
                                <div className="thumb">
                                    <img src={`/images/clients/${trust.logo}`} alt={trust.client_name}/>
                                </div>
                                </li>
                            ))
                        }
                        
                        
                    </ul>
                </div>   
              </div>
            </div>
        </div>
    </section>

    )
}
export default Trustee;