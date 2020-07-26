import {useEffect,useRef,useState} from 'react';
import StickyProjectInfo from '../Component/StickyProjectInfo';
import {TimelineLite} from "gsap";
import {motion} from 'framer-motion';



const ProjectBanner = ({width,height,x,y,stickyTitle,stickyDesc,img,close,closeProject}) => {

    const [timeline,setTimeline] = useState(null);
    const [styles,setStyles] = useState({});
    const sticky = useRef(null);
    const banner = useRef(null);
    const t1 = new TimelineLite();
    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};
    const imgBanner = {
        initial: { scale: 0.9, opacity: 0 },
        enter: { scale: 1, opacity: 1, transition },
        exit: {
          scale: 0.5,
          opacity: 0,
          transition: { duration: 1.5, ...transition }
        }
      };
    useEffect(() => {
        
       setStyles({
           position:"absolute",
           width: window.innerWidth - sticky.current.clientWidth,
           height: window.innerHeight - window.innerHeight/6,
           left: 0+sticky.current.clientWidth,
           top: 0
        });
        
        t1.to(
            banner.current,
            .6,{
                css: {
                    width: window.innerWidth - sticky.current.clientWidth,
                    height: window.innerHeight - window.innerHeight/6,
                    left: 0+sticky.current.clientWidth,
                    top: 0
                 }
            }
        )
        
        setTimeline(t1);



    }, []);
    return (
        <motion.section exit={{opacity:0}} initial={{opacity:1}}>
            <StickyProjectInfo stickyTitle={stickyTitle} stickyDesc={stickyDesc} sticky={sticky} close={close} closeProject={closeProject} timeline={timeline}/>
             
            <section className="banner-project"
            ref={banner}
            style={{position:"fixed",width:width,height:height,background: `#ececec url('${img}') no-repeat`,left:x,top:y-64}}>
                <img src={img} alt=""/>
            </section>
        </motion.section>
    );
}

export default ProjectBanner;
