import React from "react";
import {Element} from "react-scroll";
import skilling from "../../assets/skilling.jpg";
import LinearProgress  from '@material-ui/core/LinearProgress';
import "./SkillContainer.css";

const SkillContainer = ({skilldata}) => {
       return (      
        <Element className="skillContainer" id="skills">
            <div className="skillContainer__image">
              <img src={skilling} alt="'"/>
            </div>
            <div  className="skillContainer__text">
                <h2>SKILLSET</h2>
                {skilldata.map((skill,index)=>{
                 return(
                 <div key={index} className="skillContaioner__skillSet">
                    <h5>{skill.name}</h5>
                    <div className="skillContainer__slider skillContainer__slider1">
                        <LinearProgress variant="determinate" value={skill.percentage}/>
                    </div>
                </div>
                )})}
            </div>
        </Element>
    )
}

export default SkillContainer;
