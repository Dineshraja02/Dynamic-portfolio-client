import {useEffect,useState} from 'react';
import axios from "axios";
import Project from '../Project/Project';
import {Element} from "react-scroll";
import "./ProjectContainer.css";



const ProjectContainer = () => {
   const [projectData,setProjectData]=useState([]);
    const getProjectInfo= async () =>{
        try{
          const {data} = await axios.get('https://portfoliocreater-backend.herokuapp.com/formInfo/portfolioInfo',
          {headers:
              {'auth':`${localStorage.getItem('auth')}`}});
              setProjectData(data.Project)
              console.log(projectData);
        }catch(err){
             console.log(err);
        }
    }
       useEffect(()=>{
      getProjectInfo();
    },[])// eslint-disable-line react-hooks/exhaustive-deps

        
    return (
        <Element  className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects which i done for making lives of people easy.
            </p>
            <div className="projectContainer__projects">

{
           projectData.map((project,index)=>{
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
