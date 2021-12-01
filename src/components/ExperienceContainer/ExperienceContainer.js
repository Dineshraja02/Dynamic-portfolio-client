import {useEffect,useState} from 'react';
import axios from "axios";
import {Element} from "react-scroll";
import Experience from '../ExperienceBox/Experience';
import "./ExperienceContainer.css";


const ExperienceContainer = () => {
    const [experienceData,setExperienceData]=useState([]);
    const getExperienceInfo= async () =>{
        try{
          const {data} = await axios.get('https://portfoliocreater-backend.herokuapp.com/info/portfolioInfo',
          {headers:
              {'auth':`${localStorage.getItem('auth')}`}});
              setExperienceData(data.Experience)
              console.log(experienceData);
        }catch(err){
             console.log(err);
        }
    }
       useEffect(()=>{
      getExperienceInfo();
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Element className="experienceContainer" id="exp">
            <h1>Experience</h1>
            <div className="experienceContainer__info">
        {experienceData.map((experience)=>{
                 return(
                    <Experience years={experience.duration} 
                    position={experience.position} 
                    companyname={experience.company_name}/>
                )})}
                </div>
        </Element>
    )
}

export default ExperienceContainer;
