import React from 'react';
import "./Experience.css";

const Experience = (
    {key,years,position,companyname}
    ) => {
    return (
        <div key={key} className="experience">
            <h1>{years}</h1>
            <p>{position},</p> 
            <p>{companyname}</p>           
        </div>
    )
}

export default Experience;
