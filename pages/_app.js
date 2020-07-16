import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../public/css/styles.css';
import NavBar from '../sections/NavBar';
import Footer from '../sections/Footer';
import CustomCursor from '../Component/customCursor';
import {GlobalProvider} from '../context/GlobalContext';
import OffNav from '../sections/OffNav';
import Overlay from '../Component/Overlay';
import gsap from "gsap";
import { CursorProvider } from '../context/CursorContext';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [toggleMenu,setToggleMenu] = React.useState(false);
  const [imagePos,setImagePos] = React.useState({
    x:0,
    y:0,
    width: 0,
    height: 0
  });

  const nav = useRef(null);
  const button = useRef(null);

  React.useEffect(() => {
   // console.log(button);
    const tl = gsap.timeline();
    if(nav.current != null){
        gsap.to(nav.current,0,{css:{visibility: "visible" }});
        tl.from(nav.current,.4,{
          opacity: 0,
          y: 0,
          height: 0,
          ease: "ease.Power4",
          delay: .1
      });
      tl.from([button.current,".logo-offnav",".ham-close"],.4,{
        opacity: 0,
        y: -20,
        delay: 0
      });
      tl.from(".animate-link a",.4,{
        y: 50,
        delay: 0,
        stagger: {
          amount: .2
        },
        ease: "ease.Power4"
      });
      
      
    }
    
      
    toggleMenu ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "visible";
    
    !toggleMenu ? tl.reverse() : null;
  }, [toggleMenu]);

  return (
    <GlobalProvider>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="msapplication-tap-highlight" content="no" />
        <title>DG Solutions</title>
        <link rel="stylesheet" href="/css/spectre.min.css"/>
        <link rel="stylesheet" href="/css/spectre-exp.min.css"/>
        <link rel="stylesheet" href="/css/spectre-icons.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="/js/main.js"></script>
      </Head>
      <CursorProvider>
      <CustomCursor />
      <Overlay />
      <OffNav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} nav={nav} button={button}/>  
      <div className={`push ${toggleMenu ? "pushed" : ""}`}>
      <nav>    
        <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </nav>
       
          <Component {...pageProps} imagePos={imagePos} setImagePos={setImagePos} />
       
      
      </div>
      </CursorProvider>
    </GlobalProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
