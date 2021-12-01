import {useEffect,useState} from 'react';
import axios from "axios";
import Header from "../Header/Header";
import TopContainer from "../TopContainer/TopContainer";
import SkillContainer from "../SkillContainer/SkillContainer";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import ExperienceContainer from "../ExperienceContainer/ExperienceContainer";
import Contact from "../Contact/Contact";
import "./portfolio.css";



const Portfolio =(props)=>{
    const [info,setInfo]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const getInfo= async () =>{
        try{
          const { data }= await axios.get('https://portfoliocreater-backend.herokuapp.com/info/portfolioInfo',
          {headers:
              {'auth':`${localStorage.getItem('auth')}`}});
              setInfo(data)
              console.log(data);
              setIsLoading(false);
        }catch(err){
             console.log(err);
        }
    }
       useEffect(()=>{
      getInfo();
    },[])// eslint-disable-line react-hooks/exhaustive-deps

if(isLoading){
    return (
        <div className="loading">
            <p>
                <b>Your Data is Loading...</b>
            </p>
        </div>
    )
}
else{
    return(
        <>
            <Header {...props} />
            <TopContainer topdata={info}/>
            <SkillContainer skilldata={info.Skills}/>
            <ProjectContainer projectdata={info.Project}/>
            <ExperienceContainer experiencedata={info.Experience}/>
            <Contact contactdata={info}/>
        </>
    )
}
}


export default Portfolio;