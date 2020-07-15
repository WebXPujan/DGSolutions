import {motion} from 'framer-motion';
import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext'


const StickyProjectInfo = ({stickyTitle,stickyDesc,sticky,close,closeProject,timeline}) => {

    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};
    const [cursor,setCursor] = useContext(GlobalContext);
    
    return (
        <motion.div exit={{opacity:0}} className="sticky-info" ref={sticky} onMouseEnter={()=>setCursor("")}>
                <div className="content">
                    {
                        close && (
                            <motion.div className="ham ham-close"
                                onMouseEnter={()=>setCursor("hovered")}
                                onMouseLeave={() => setCursor("")}
                                onClick={() => closeProject(timeline)}
                                initial={{x:"-20%",opacity:0}}
                                animate={{x:"0%",opacity:1,transition: {delay:.5,duration:1,ease:transition.ease}}}
                                >
                                <a href="" className="dg-link" onClick={e => e.preventDefault()}>
                                    <span className="icons">
                                        <svg id="Capa_1" enableBackground="new 0 0 413.348 413.348" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg"><path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>                    </span>
                                </a>
                            </motion.div>
                        )
                    }
                    <motion.h3 
                    className="black title title__big title__border"
                    initial={{opacity:0,y:30}}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {delay:.3,duration:1,ease:transition.ease}
                    }}
                    >
                        <strong className="number gray">{stickyTitle.split(' ')[0]}</strong><br/>
                        <strong className="number gray">{stickyTitle.split(' ')[1]}</strong>
                    </motion.h3>
                    <motion.p 
                    className="para"
                    initial={{opacity:0,y:30}}
                    animate={{opacity:1,y:0,transition:{delay:.2,...transition}}}
                    > {stickyDesc}
                    </motion.p>  
                    <motion.strong className="scroll-down" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0,transition:{delay:.4,...transition}}}>Scroll down</motion.strong>
                </div>
        </motion.div>
    );
}

export default StickyProjectInfo;
