import { Link } from 'react-scroll';
import "./TopContent.css";


const TopContent = ({topdata}) => {
    return (
        <div className="topContent">
            <div className="topContent__container">
                <h1>Mr.{topdata.fullName}</h1>
                <p>{topdata.about}</p>
                <a target="_blank" rel="noreferrer" href={topdata.resume}>
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