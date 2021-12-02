import React from 'react';
import "./Header.css"
import {Link} from "react-scroll";


const Header = (props) => {
    return (
          <div className="header">
            <div className="header__left">
                <h1>
                    Develop<span>er</span>
                </h1>
            </div>
            <div className="header__right">
            <Link to="about" smooth={true} duration={500}>
                <h4>About Me</h4>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
                <h4>Projects</h4>
            </Link>
            <Link to="exp" smooth={true} duration={500}>
                <h4>Experience</h4>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
            <button className="logout-button" onClick={()=>{
                localStorage.clear();
                props.history.push("/login");
            }}>Logout</button>
            </div>
        </div>
    )
}

export default Header;
