import React from "react";
import {Element} from "react-scroll";
import Experience from '../ExperienceBox/Experience';
import "./ExperienceContainer.css";


const ExperienceContainer = ({experiencedata}) => {
        return (
        <Element className="experienceContainer" id="exp">
            <h1>Experience</h1>
            <div className="experienceContainer__info">
        {experiencedata.map((experience,index)=>{
                 return(
                    <Experience index={index} years={experience.duration} 
                    position={experience.position} 
                    companyname={experience.company_name}/>
                )})}
                </div>
        </Element>
    )
}

export default ExperienceContainer;
