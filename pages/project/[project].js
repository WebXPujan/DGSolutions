import {useEffect} from 'react';
import gsap from "gsap";
import ProjectBanner from '../../sections/ProjectBanner';
import {useRouter} from 'next/router' 
import useSWR from 'swr'
import { AnimatePresence } from 'framer-motion';


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

const ProjectDetails = ({imagePos}) => {
    const router = useRouter();
    //remove flashing
    //gsap.from(document.querySelector('body'),{opacity:0}).to(document.querySelector('body'),{opacity:1});
    const { query } = router
    const { data, error } = useSWR(
      () => query.project && `/api/projects/${query.project}`,
      fetcher
    )
  
     if (error) return <div>{error.message}</div>
     if (!data) return <div>Loading...</div>


   
    return (
        
        
                <>
                <ProjectBanner width={imagePos.width} height={imagePos.height} x={imagePos.x} y={imagePos.y} stickyTitle={data.name} stickyDesc={data.desc} img={data.img_url} />
                <section style={{height:1000}}></section>
                </>
        
    );
}

// ProjectDetails.getInitialProps = async (ctx) => {
//     const { query } = ctx;
  
//     const res = await fetch("http://localhost:3000/api/project?id="+query);
//     const project = await res.json();

//     return{
//         project: project
//     }
// }

export default ProjectDetails;
