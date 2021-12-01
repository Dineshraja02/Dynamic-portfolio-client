import {useEffect,useState} from 'react';
import axios from "axios"
import {Element} from "react-scroll";
import skilling from "../../assets/skilling.jpg";
import LinearProgress  from '@material-ui/core/LinearProgress';
import "./SkillContainer.css";

const SkillContainer = () => {
    const [skillData,setSkillData]=useState([]);
    const getskillInfo= async () =>{
        try{
          const {data} = await axios.get('http://localhost:3001/info/portfolioInfo',
          {headers:
              {'auth':`${localStorage.getItem('auth')}`}});
              setSkillData(data.Skills)
              console.log(skillData);
        }catch(err){
             console.log(err);
        }
    }
       useEffect(()=>{
      // eslint-disable-next-line
      getskillInfo();
    },[])

    return (

        
        <Element className="skillContainer" id="skills">
            <div className="skillContainer__image">
              <img src={skilling} alt="'"/>
            </div>
            <div  className="skillContainer__text">
                <h2>SKILLSET</h2>
                {skillData.map((skill,index)=>{
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
