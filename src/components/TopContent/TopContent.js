import {useEffect, useState} from 'react'
import { Link } from 'react-scroll';
import "./TopContent.css";
import axios from 'axios';

const TopContent = () => {
    const [topData,setTopData]=useState([]);
    const getInfo= async () =>{
        try{
          const {data} = await axios.get('https://portfoliocreater-backend.herokuapp.com/formInfo/portfolioInfo',
          {headers:
              {'auth':`${localStorage.getItem('auth')}`}});
              setTopData(data);
        }catch(err){
             console.log(err);
        }
    }
       useEffect(()=>{
      getInfo();
    },[])

    return (
        <div className="topContent">
            <div className="topContent__container">
                <h1>Mr.{topData.fullName}</h1>
                <p>{topData.about}</p>
                <a target="_blank" rel="noreferrer" href={topData.resume}>
                    <button className="topContent__downloadButton">View CV</button>
                </a>
                <Link to="projects"smooth={true} duration={500}>
                    <button className="topContent__workButton">My Work</button>
                </Link>
            </div>           
        </div>
    )
}

export default TopContent;