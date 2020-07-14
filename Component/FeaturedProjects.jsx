import {useEffect,useState,useRef, useContext} from 'react'
import {TimelineLite,gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {GlobalContext} from '../context/GlobalContext'
import {motion, AnimatePresence,useTransform} from 'framer-motion'



 gsap.registerPlugin(ScrollTrigger);
// gsap.core.globals("ScrollTrigger", ScrollTrigger);

const FeaturedProjects = ({draged, setDraged, spring}) => {
    const [dragged,setDragged] = useState(draged);
    const slider = useRef(null);
    const transition = {duration: 2, ease: [0.43,0.13,0.23,0.96]};
    const [cursor,setCursor] = useContext(GlobalContext);
    
    const width = useTransform(spring,[-30,0],['100%','50%']);

    useEffect(() => {

        
        // let sections = gsap.utils.toArray(".box");
        // console.log(sections);
        
        // gsap.to(sections, {
        //     xPercent: -100 * (sections.length -1),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: ".ctn",
        //         pin: true,
        //         scrub: 1,
        //         snap: 1/(sections.length - 1),
        //         end: () => "+=" +
        //         document.querySelector(".ctn").offsetWidth
        //     }
        // });

        //gsap.registerPlugin(ScrollTrigger);

        let duration = 10,
                sections = gsap.utils.toArray(".box"),
                sectionIncrement = duration / (sections.length - 1),
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".slider",
                        pin: true,
                        scrub: 1,
                snap: 1 / (sections.length - 1),
                        start: "top top",
                        end: "+=5000"
                    }
                });

        tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: duration,
        ease: "none"
        });



        // everything below this is just for the fading/scaling up which is NOT scrubbed - it's all dynamic, triggered when each section enters/leaves so that the fading/scaling occurs at a consistent rate no matter how fast you scroll!
        // sections.forEach((section, index) => {
        // let tween = gsap.from(section, {
        //     opacity: 0, 
        //     scale: 0.6, 
        //     duration: 1, 
        //     force3D: true, 
        //     paused: true
        // });
        // addSectionCallbacks(tl, {
        //     start: sectionIncrement * (index - 0.99),
        //     end: sectionIncrement * (index + 0.99),
        //     onEnter: () => tween.play(),
        //     onLeave: () => tween.reverse(),
        //     onEnterBack: () => tween.play(),
        //     onLeaveBack: () => tween.reverse()
        // });
        // index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
        // });





        // helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
        // function addSectionCallbacks(timeline, {start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack}) {
        // let trackDirection = animation => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
        //     let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
        //         prevTime = animation.time();
        //     animation.direction = animation.reversed() ? -1 : 1;
        //     animation.eventCallback("onUpdate", () => {
        //     let time = animation.time();
        //     if (prevTime !== time) {
        //         animation.direction = time < prevTime ? -1 : 1;
        //         prevTime = time;
        //     }
        //     onUpdate && onUpdate.call(animation);
        //     });
        // },
        //     empty = v => v; // in case one of the callbacks isn't defined
        // timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
        // start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
        // end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
        // }
        
        //console.log(spring);
       
    //    let scrollPercent = 0,
    //    $slider = slider.current;
    //    let tl = new TimelineLite({ paused:true })
    //        .to($slider, .5,{ xPercent: -77.75 });
       
        
        
    //    const slideShowcase = (e) => {
    //      //console.log(tl.progress());
    //      if (e.deltaY < 0) {
    //          if(tl.progress() >= 0) {
                 
    //              scrollPercent = scrollPercent - 0.0085
    //              tl.progress( scrollPercent ).pause(); 
    //              //console.log( scrollPercent )
    //              if(tl.progress()  <= 0.00) {
    //                  scrollPercent = 0.99
    //                  tl.progress( 0.99 ).pause(); 
    //              }
    //          }
             
    //      }
    //      else {
    //          if(tl.progress() < 1) {
    //              scrollPercent = scrollPercent + 0.0085
    //              tl.progress( scrollPercent ).pause(); 
    //              //console.log( scrollPercent )
    //              if(tl.progress()  > 0.99) {
    //                  scrollPercent = 0
    //                  tl.progress( 0 ).pause(); 
    //              }
    //          }
    //      }
    //  }

    //  window.addEventListener("mousewheel",slideShowcase,false);
    //  window.addEventListener("DOMMouseScroll",slideShowcase,false);
    }, [dragged]);


    const handleCloseSlideShow = e => {
        setDraged(false);
        spring.stop();
        spring.set(0);
        setCursor("cursor");
        
    }
    return(
        <AnimatePresence initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} exitBeforeEnter>
            
                    <motion.div className="ctn"
                    onMouseEnter={() => setCursor("cross")}
                    onMouseLeave={() => setCursor("cursor")}
                    onClick={handleCloseSlideShow}
                    initial={{ opacity: 0}}
                    >
                        <motion.div 
                        className="slider" 
                        ref={slider}
                        initial={{x: 800 }}
                        animate={{x: 0 }}
                        transition={transition}
                        >
                            <motion.div className="box" style={{width: width}}><img src="https://unsplash.it/1361" alt="" onMouseEnter={() => setCursor("cross.focus")} onMouseLeave={() => setCursor("cross")}/>
                            <h1>1</h1>
                            </motion.div>
                            <div className="box"><img src="https://unsplash.it/1362" alt="" onMouseEnter={() => setCursor("cross.focus")} onMouseLeave={() => setCursor("cross")}/>
                            <h1>2</h1>
                            </div>
                            <div className="box"><img src="https://unsplash.it/1363" alt="" onMouseEnter={() => setCursor("cross.focus")} onMouseLeave={() => setCursor("cross")}/>
                            <h1>3</h1>
                            </div>
                            <div className="box"><img src="https://unsplash.it/1364" alt="" onMouseEnter={() => setCursor("cross.focus")} onMouseLeave={() => setCursor("cross")}/>
                            <h1>4</h1>
                            </div>
                            <div className="box"><img src="https://unsplash.it/1365" alt="" onMouseEnter={() => setCursor("cross.focus")} onMouseLeave={() => setCursor("cross")}/>
                            <h1>5</h1>
                            </div>
                            
                        </motion.div>
                    </motion.div>
          
        </AnimatePresence>
    )
}
export default FeaturedProjects