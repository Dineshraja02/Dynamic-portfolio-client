import React , {useState} from 'react';
import "./Project.css"

const Project = ({title,desc,link}) => {
    const [show, setShow] = useState(false);
    return (
        <a target="_blank" href={link}  rel="noreferrer">
            <div className="project"
            onMouseEnter={()=>setShow(true)} 
            onMouseLeave={()=>setShow(false)}>
                {
                    show ? ( 
                        <div className="project__content">
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>
                        ):(
                           <h2 className="project__content__Title">{title}</h2>
                        )
                }
            </div>
        </a>
    )
}

export default Project;
