import {useEffect,useState} from 'react';
import axios from "axios";
import {Element} from "react-scroll";
import {IconButton} from "@material-ui/core";
import {Facebook, Instagram, LinkedIn} from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
    const [contactData,setContactData]=useState([]);
    const getContactInfo= async () =>{
        try{
          const {data} = await axios.get('http://localhost:3001/info/portfolioInfo',
          {headers:
              {'auth':`${localStorage.getItem('auth')}`}});
              setContactData(data)
              console.log(contactData);
        }catch(err){
             console.log(err);
        }
    }
       useEffect(()=>{
      getContactInfo();
    },[])
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
        <div className="contact__container">
            <p>
                Email : <span>{contactData.email}</span>
            </p>
            <p>
                Github :<span>{contactData.github}</span>
            </p>
            <div className="contact_icons">
                <a target="_blank "href={contactData.facebook}>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>
                <a target="_blank " href={contactData.instagram}>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>
                <a target="_blank " href={contactData.linkedIn}>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
            </div>
        </div>
        </Element>
    )
}

export default Contact;
