import React, {useEffect} from 'react';
import Footer from '../sections/Footer';
import DisplayGrid from '../sections/DisplayGrid';
import ProjectBanner from '../sections/ProjectBanner';

const Projects = ({loading,setLoading}) => {
    useEffect(() => {
        setLoading(!loading); 
    }, []);
    
    return (
     <>   
        <section id="cta" className="sections" style={{marginTop: 64}}>
            <div className="container">
                <div className="info">
                    <h1 className="green title md-title big text-center">Don't be shy, we don't bite!</h1>
                    <p className="title title__small big inverted text-center">Tell us about your new project, Your future dream job or if you simply want to talk over coffee!</p>
                </div>
            </div>
        </section>
        <DisplayGrid col={2} type="projects" loading={loading} setLoading={setLoading} />
        <Footer />
    </>
    );
}

export default Projects;
