import React, {useState} from 'react';
import ProjectCard from '../Component/ProjectCard'
import {team,projects} from '../API/projects'
import Link from 'next/link'


const DisplayGrid = ({col,type,loading,setLoading}) => {

    

    const createColumn = (num = 2) => {
        if(num == 2){

            return (
                <>
                    <div className="col odd">

                       
                       {
                        type === "team" && ( <ul>
                                {team.map((t) => (
                                    t.id % 2 == 0 ? <ProjectCard details={t} type="team" key={t.id} setLoading={setLoading} loading={loading} /> : null
                                ))}
                                
                            </ul>
                        )
                        }


                        {
                        type === "projects" && ( <ul>
                            {projects.map((p,i) => (
                                i % 2 == 0 ? (
                                <Link href="/project/[project]" as={`/project/${p.id}`} key={i} >
                                    <a className="dg-link">
                                    <ProjectCard details={p} type="projects" setLoading={setLoading} loading={loading} />
                                    </a>
                                </Link>
                                ) : null
                            ))}
                            
                        </ul>
                        )

                        }
                        
                    </div>
                    <div className="col even">

                    {
                        type === "team" && ( <ul>
                                {team.map((t) => (
                                    t.id % 2 != 0 ? <ProjectCard details={t} type="team" key={t.id} setLoading={setLoading} loading={loading} /> : null
                                ))}
                                
                            </ul>
                        )
                        
                        }


                        {
                        type === "projects" && ( <ul>
                            {projects.map((p,i) => (
                                i % 2 != 0 ? (
                                <Link href="/project/[project]" as={`/project/${p.id}`} key={i} >
                                    <a className="dg-link">
                                    <ProjectCard details={p} type="projects" setLoading={setLoading} loading={loading} />
                                    </a>
                                </Link>
                                ) : null
                            ))}
                            
                        </ul>
                        )

                        }

                    </div>
                </>
            );
        }else if(num == 3){

            return (
                <>
                    <div className="col odd" style={{flex:'33.3333%'}}>
                        <ul>
                            
                        </ul>
                    </div>
                    <div className="col even" style={{flex:'33.3333%'}}>

                    </div>
                    <div className="col odd" style={{flex:'33.3333%'}}>

                    </div>
                </>
            )

        }
    }
    return (
        <>
        <section className="sections" id="display-grid">
            <div className="container">
                <div className="columns">
                    <div className="column col-md-12">
                    
                       <div className="wrap" onLoad={()=>setLoading(!loading)}>
                           {createColumn(col)}
                       </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default DisplayGrid;
