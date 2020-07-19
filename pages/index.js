import dynamic from "next/dynamic"
import Banner from '../sections/Banner';
import React, { useRef, useEffect, useState } from 'react';
import Services from '../sections/Services';
import {HomeProvider} from '../context/HomeContext';
import Trustee from '../sections/Trustee';
import WeAre from '../sections/WeAre';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';
import {projects} from '../API/projects'
import useWindowSize from "../Hooks/useWindowSize"
import debounce from "../Hooks/Debounce"
import useSmoothScroll from "use-smooth-scroll";
 const Blog = dynamic(() => import('../sections/Blog'));
 const Testimonial = dynamic(() => import('../sections/Testimonial'));

const Index = ({setImagePos,banner}) =>{
  //const Blog = dynamic(import('../sections/Blog'));

  //hook
  const size = useWindowSize();
  //Ref
  const app = useRef()
  const scrollContainer = useRef()

  //state
  const [height,setHeight] = useState(0);
  const [loading,setLoading] = useState(true);

  const skewConfigs = {
    ease: .1,
    current: 0,
    previous: 0,
    rounded: 0
  }

  //scroll
  //const scrollTo = useSmoothScroll("y", scrollContainer,{duration:200,easing:300});
  useEffect(() => {
 
      console.log(size);
      setHeight(size.height);
      document.querySelector('body').style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
      
  
  }, [height,loading]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  },[])
  
   
  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous *100) / 100;

    //vars
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //
    scrollContainer.current.style.transform = `translate3d(0,-${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
  
    requestAnimationFrame(() => skewScrolling())
    
  }

  // const handleWheel = (e) => {
    
  //   let $e = e.deltaY;
  //   Math.abs($e) < 100 ? $e = e.deltaY*33.33 : $e = $e;
  //   let velocity = $e * 2 + window.pageYOffset;
  //   console.log(window.pageYOffset);


  //   scrollTo(velocity);
  // }

    return(
      <HomeProvider>
        <div className="App" ref={app}>
          <div className="scroll" ref={scrollContainer}>
            <Banner setImagePos={setImagePos} banner={banner} projects={projects}/>
            <Services />
            <Trustee />
            <WeAre />
            <Testimonial />
            <Blog setLoading={setLoading}/> 
            <CTA />
            <Footer />
          </div>
        </div>  
      </HomeProvider>
    );

  

}

// Index.getInitialProps = async (ctx) => {
//   const res = await fetch(
//     "http://localhost:3000/api/project"
// ).then((res) => res.json());
 
//   return { projects: res }
// }


export default Index;