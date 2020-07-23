import dynamic from "next/dynamic"
import Banner from '../sections/Banner';
import Services from '../sections/Services';
import {HomeProvider} from '../context/HomeContext';
import Trustee from '../sections/Trustee';
import WeAre from '../sections/WeAre';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';
import {projects} from '../API/projects'
import { useEffect } from "react";
 const Blog = dynamic(() => import('../sections/Blog'));
 const Testimonial = dynamic(() => import('../sections/Testimonial'));

const Index = ({setImagePos,banner,setLoading,loading}) =>{

    useEffect(()=>{
      setLoading(!loading);
    },[])
  
    return(
      <HomeProvider>
        
            <Banner setImagePos={setImagePos} banner={banner} projects={projects}/>
            <Services />
            <Trustee />
            <WeAre />
            <Testimonial />
            <Blog setLoading={setLoading} loading={loading} /> 
            <CTA />
            <Footer />

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