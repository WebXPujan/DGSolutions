import Banner from '../sections/Banner';
import React from 'react';
import Services from '../sections/Services';
import {HomeProvider} from '../context/HomeContext';
import Trustee from '../sections/Trustee';
import WeAre from '../sections/WeAre';
import Testimonial from '../sections/Testimonial';
import Blog from '../sections/Blog';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';


const Index = ({setImagePos,banner,projects}) =>{


   

    return(
      <HomeProvider>
        
          <Banner setImagePos={setImagePos} banner={banner} projects={projects} />
          <Services />
          <Trustee />
          <WeAre />
          <Testimonial />
          <Blog />
          <CTA />
          <Footer />
          
      </HomeProvider>
    );

  

}

Index.getInitialProps = async (ctx) => {
  const res = await fetch(
    "http://localhost:3000/api/project"
).then((res) => res.json());
 
  return { projects: res }
}


export default Index;