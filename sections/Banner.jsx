import {useContext, useState, useEffect, useRef} from 'react'
import Button from '../Component/Button';
import StickyProjectInfo from '../Component/StickyProjectInfo';
import {GlobalContext} from '../context/GlobalContext'
import {motion, useSpring, useTransform, useViewportScroll, AnimatePresence, useDragControls} from 'framer-motion'
import useSmoothScroll from "use-smooth-scroll";
import gsap from "gsap";
import ProjectBanner from './ProjectBanner';
import { useRouter } from 'next/router';

const Banner = (props) => {

   const router = useRouter();
    const sticky = {
        title: "Our Projects",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }

    
    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};
    const [cursor,setCursor] = useContext(GlobalContext);
    const x = useSpring(0, {stiffness: 200, damping: 300, ease: "ease.out"});
    
    const fadeOut = useTransform(x,[-30,0],[0,1]);
    const slideRight = useTransform(x,[-20,0],[20,0]);
    const [isDragged,setIsDragged] = useState(false);
    const [isProjectOpen,projectClose] = useState(false);
    const [viewPort,setViewPort] = useState({
        x:0,
        y:0,
        width:0,
        height:0
    });
    const [projectDetails,setProjectDetails] = useState({});

    const { scrollYProgress } = useViewportScroll();
    const showcaseSlide = useTransform(scrollYProgress,[0,1],[1,1.2]);
   
    const slider = useRef(null);
    const sliderWrapper = useRef(null);
    const cta = useRef(null);
    const titleBig = useRef(null);

    useEffect(() => {
        
        
        x.onChange(() => {
            x.get() < -50 ? setIsDragged(true) : setIsDragged(false);
            x.get() < -50 ? document.querySelector('#navBar .wrapper').classList.add('slideUp') : document.querySelector('#navBar .wrapper').classList.remove('slideUp');
            x.get() < -50 ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "visible";
        
            x.get() < -50 ? null : document.querySelector("#banner") && (document.querySelector("#banner").scrollLeft = 0) ;
            
      
        });
      console.log(isProjectOpen);
       return () => x.set(0)
        
    }, [x]);

  
    const dragControls = useDragControls();
    function startDrag(event) {
        dragControls.start(event, { snapToCursor: true })
      }

    const viewProject = (e,details) => {
       //e.preventDefault();
       jQuery(e.currentTarget).closest(".image").addClass('active');
       var offset = jQuery(e.currentTarget).closest(".image").offset();
       var w = jQuery(window);
       
       props.setImagePos({
           x: offset.left-w.scrollLeft(),
           y: offset.top-w.scrollTop(),
           width:jQuery(e.currentTarget).closest(".image").width(),
           height: jQuery(e.currentTarget).closest(".image").height()
       });
       projectClose(true);
       setViewPort({
        x: offset.left-w.scrollLeft(),
        y: offset.top-w.scrollTop(),
        width:jQuery(e.currentTarget).closest(".image").width(),
        height: jQuery(e.currentTarget).closest(".image").height()
       });
       setProjectDetails(details);
       
    }

    const handleCloseProject = timeline => {
        //e.preventDefault();
        
        timeline.eventCallback("onReverseComplete", function(){
        setTimeout(()=>{
        projectClose(false);
        },1);
        router.push("/");
     
        });
        timeline.reverse();
        
    }
   
   const scrollTo = useSmoothScroll("x", slider,{duration:200,easing:300});
   
   const handleWheel = (e) => {
    let slides = gsap.utils.toArray(".showcase li.expanded");
    let $e = e.deltaY;
    Math.abs($e) < 100 ? $e = e.deltaY*33.33 : $e = $e;
    let velocity = $e * 2 + slider.current.scrollLeft;


    scrollTo(velocity);
   
   
    let $list = slider.current;
    let $active = document.querySelector(".showcase li.expanded.active .info");
    
    
    // console.log(slides[1].offsetWidth);
    // console.log($list.offsetWidth,$list.scrollWidth - $list.scrollLeft,sliderWrapper.current.clientWidth);
    // console.log(slides);

   }
  


    return(
        //onWheel={isDragged ? handleWheel : undefined}
        <>
            <>
            {
                isDragged && (
                    !isProjectOpen ? 
                    <AnimatePresence exitBeforeEnter>
                        <StickyProjectInfo stickyTitle={sticky.title} stickyDesc={sticky.desc} close={false} />
                    </AnimatePresence>
                    :
                    <AnimatePresence >
                    <ProjectBanner x={viewPort.x} y={viewPort.y} width={viewPort.width} height={viewPort.height} stickyTitle={projectDetails.name} stickyDesc={projectDetails.desc} img={projectDetails.img} close={true} closeProject={handleCloseProject}/>
                    </AnimatePresence>
                
                ) 
                   
            }

            </>
       
            <motion.section exit={{opacity:0}} className={isDragged ? "sections has-offset visible" : "sections has-offset hidden"} id="banner" ref={slider} onWheel={isDragged ? handleWheel : undefined}>
            
            
          
            <div className="container">
                <div className="columns">
                <div className="column col-md-12">
                    <motion.div className="hero-content" style={{ x: slideRight, opacity: fadeOut }}>
                        <motion.h1 
                        initial={{opacity:0,y:30}}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {delay:.3,duration:1,ease:transition.ease}
                        }} 
                        className="title title__big" ref={titleBig}>
                            Transform Your Brand with <br/>
                            <span className="green big">Revolutionary Digital Experiences</span>
                        </motion.h1>
                        <motion.p className="para"
                        className="para"
                        initial={{opacity:0,y:30}}
                        animate={{opacity:1,y:0,transition:{delay:.2,...transition}}}
                        >
                            Asperiores, architecto qui facere ipsam saepe temporibus consequatur accusamus laborum? Alias rem velit quisquam. Voluptas, consectetur quisquam.
                        </motion.p>
                        <motion.p initial={{opacity:0,x:-20}} animate={{opacity:1,x:0,transition:{delay:.4,...transition}}}>
                            <Button type="normal" title="Start Project" link="/demo" />
                        </motion.p>
                    </motion.div>
                </div>
                <div className="column col-md-12"></div>
                </div>
            </div>
            {/* {isDragged && (
                
                    <FeaturedProjects draged={isDragged} setDraged={setIsDragged} spring={x}/>
            
            )  } */}
            <motion.section className={isDragged ? "offset fixed" : "offset"}
            drag={"x"}
            dragConstraints={{
                left: -100,
                right: 50,
            }}
            dragElastic={0.005}
            style={{ x }}
            transition={transition}
            dragControls={dragControls}
            >
                {
                    !isDragged && (
                        <div className="puller"></div>
                    )
                }
                
                <motion.ul className={isDragged ? (isProjectOpen ? "showcase expanded viewport" : "showcase expanded") : "showcase"}
                onMouseEnter={() => setCursor(`${isDragged ? '' : 'dragged'}`)}
                onMouseLeave={() => setCursor("")}
                style={{ showcaseSlide, fadeOut }}
                transition={transition}
                ref={sliderWrapper}
                >
                    
                    {
                        props.projects.map( (project,i) => (
                            <li 
                            className={isDragged ? "expanded active" : ""}
                            key={project.id}
                            >
                                <div className="list-items">
                                    <div className={isDragged ? (isProjectOpen ? "thumbnail fadeOut" : "thumbnail") : "thumbnail"} 
                                    // style={{ background: `url('${project.img_url}') no-repeat` }}
                                    onMouseLeave={()=>setCursor(`${isDragged ? "" : "dragged"}`)}
                               
                                     > 
                                        <div className={isDragged ? (isProjectOpen ? "info hide" : "info") : "info"} >
                                            <strong className="number gray">{`0${i+1}`}</strong>
                                            <h1 className="black title title__small text-capitalize">{project.name}</h1>
                                            <p className="green subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>website, Mobile Apps</p>
                                        
                                        </div> 
                                        <div className={isDragged ? (isProjectOpen ? "image" : "image clip") : "image"}>
                                            <img src={project.img_url} alt=""/>
                                            {
                                                isDragged && (
                                                <Button type="inverted" 
                                                title="View case study" 
                                                button={cta} 
                                                link={`/?project=${project.id}`}
                                                viewas={`/project/${project.id}`}
                                                hasSlug={true} 
                                                onClick={viewProject} 
                                                details={{name:project.name,desc:project.desc,img:project.img_url,slug:project.id}} 
                                                onClick={viewProject}
                                                /> )
                                            }
                                        
                                        </div> 
                                    </div>
                                </div>
                            </li>
                        )

                        )
                    }
                        
                    
                </motion.ul>
            </motion.section>
            
        </motion.section>
        </>
    );
}
export default Banner;