import React from 'react';
import "./Experience.css";

const Experience = ({years,position,companyname}) => {
    return (
        <div  className="experience">
            <h1>{years}</h1>
            <p>{position},</p> 
            <p>{companyname}</p>           
        </div>
    )
}

export default Experience;
