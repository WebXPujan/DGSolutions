import {useContext, useState, useEffect, useRef} from 'react'
import Button from '../Component/Button';
import StickyProjectInfo from '../Component/StickyProjectInfo';
import {GlobalContext} from '../context/GlobalContext'
import {motion, useSpring, useTransform, useViewportScroll, AnimatePresence, useDragControls} from 'framer-motion'
import useSmoothScroll from "use-smooth-scroll";
import gsap from "gsap";
import ProjectBanner from './ProjectBanner';
import { useRouter } from 'next/router';
import ProgressiveImage from 'react-progressive-graceful-image'
import Link from 'next/link'
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
    const [mobile,setMobile] = useState(0);

    const { scrollYProgress } = useViewportScroll();
    const showcaseSlide = useTransform(scrollYProgress,[0,1],[1,1.2]);
   
    const slider = useRef(null);
    const sliderWrapper = useRef(null);
    const cta = useRef(null);
    const titleBig = useRef(null);
    const featureImage = useRef(null);

    useEffect(() => {
        
        
        x.onChange(() => {
            x.get() < -50 ? setIsDragged(true) : setIsDragged(false);
            x.get() < -50 ? document.querySelector('#navBar .wrapper').classList.add('slideUp') : document.querySelector('#navBar .wrapper').classList.remove('slideUp');
            x.get() < -50 ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "visible";
        
            x.get() < -50 ? null : document.querySelector("#banner") && (document.querySelector("#banner").scrollLeft = 0) ;
            
      
        });
        setMobile(window.innerWidth);
      //console.log(isProjectOpen);


    //   gsap.from(
    //       featureImage.current,
    //       .6,{
    //           css:{width:0}
    //       }
    //   )
       return () => x.set(0)
        
    }, [x]);

  
    const dragControls = useDragControls();
    function startDrag(event) {
        dragControls.start(event, { snapToCursor: true })
      }

    const viewProject = (e,details) => {
       //e.preventDefault();

       document.querySelector("#navBar .wrapper").classList.remove("slideUp");


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
        document.querySelector("#navBar .wrapper").classList.add("slideUp");
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
  
  
   const handleImgload = (elem) => {
       gsap.to(elem,0.6,{opacity:1,delay:.1});
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
                                        <div 
                                        className={isDragged ? (isProjectOpen ? "image" : "image clip") : "image"} 
                                        ref={featureImage}
                                        >
                                            <ProgressiveImage src={project.img_url} placeholder="">
                                                {src => {

                                                    return <img src={src} alt={project.name} onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}}/>
                                                }

                                                }
                                            </ProgressiveImage>
                                            

                                            {
                                                isDragged && (
                                                <Button type="inverted" 
                                                title="View case study" 
                                                button={cta} 
                                                link={`/?project=${project.id}`}
                                                viewas={`/project/${project.id}`}
                                                hasSlug={true}  
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

            {
               mobile <= 840 && (
                    <section className="sections mob-featured-projects" >
                            <motion.ul
                            drag={"x"}
                            dragConstraints={{
                                left: -mobile,
                                right: 0,
                            }}
                            dragElastic={0.005}
                            >
                                {
                                     props.projects.map( (project,i) => (
                                        <li key={project.name+i}>
                                        
                                                <div className="info" >
                                                    <strong className="number gray">{`0${i+1}`}</strong>
                                                    <h1 className="black title title__small text-capitalize">{project.name}</h1>
                                                    <p className="green subtitle subtitle__small big text-capitalize sec-font"><i className="fas fa-info-circle"></i>website, Mobile Apps</p>
                                                </div> 
                                                <Link href="/project/[project]" as={`/project/${project.id}`}>
                                                <a>
                                                    <div className="thumb">
                                                        
                                                        <ProgressiveImage src={project.img_url} placeholder="">
                                                            {src => {

                                                                return <img src={src} alt={project.name} onLoad={(ref) => handleImgload(ref.target)} style={{opacity:0}}/>
                                                            }

                                                            }
                                                        </ProgressiveImage>
                                                        
                                                    </div>
                                                </a>
                                            </Link>
                                                
                                        </li>
                                     ))
                                }
                                
                                <li className="cta">
                                       
                                    <Link href="/projects">
                                    <a>
                                        <div className="thumb">

                                            <h1 className="title title__big">View more</h1>
                                            <span className="icons">
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

                                            
                                            
                                        </div>
                                    </a>
                                </Link>
                                    
                            </li>
                                
                            </motion.ul>
                    </section>
                )
            }
            
        </motion.section>
        </>
    );
}
export default Banner;