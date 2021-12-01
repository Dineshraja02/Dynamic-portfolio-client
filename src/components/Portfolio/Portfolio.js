import React from "react";
import Header from "../Header/Header";
import TopContainer from "../TopContainer/TopContainer";
import SkillContainer from "../SkillContainer/SkillContainer";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import ExperienceContainer from "../ExperienceContainer/ExperienceContainer";
import Contact from "../Contact/Contact";
import "./portfolio.css";



const Portfolio =(props)=>{
    return(
        <>
            <Header {...props} />
            <TopContainer/>
            <SkillContainer/>
            <ProjectContainer />
            <ExperienceContainer/>
            <Contact />
        </>
    )
}


export default Portfolio;