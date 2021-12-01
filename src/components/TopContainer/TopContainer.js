import React from 'react';
import {Element} from "react-scroll"
import TopContent from '../TopContent/TopContent';
import "./TopContainer.css";

const TopContainer = ({topdata}) => {
    return (
           <Element topdata={topdata} name="about" className="topContainer">
              <TopContent topdata={topdata}/>
           </Element>
    )
}

export default TopContainer;
