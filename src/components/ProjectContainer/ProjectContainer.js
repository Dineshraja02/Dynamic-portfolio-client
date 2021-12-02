import React from "react";
import Project from '../Project/Project';
import {Element} from "react-scroll";
import "./ProjectContainer.css";



const ProjectContainer = ({projectdata}) => {    
    return (
        <Element  className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects which i done for making lives of people easy.
            </p>
            <div className="projectContainer__projects">

{
           projectdata.map((project,index)=>{
            return(
                <Project
                  key={index}
                  title={project.project_name}
                  desc={project.project_description}
                  link={project.project_link}
               />
            );
            }
            )
}          
             </div>
        </Element>
    )
}

export default ProjectContainer;
