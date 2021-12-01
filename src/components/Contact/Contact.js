import React from "react";
import {Element} from "react-scroll";
import {IconButton} from "@material-ui/core";
import {Facebook, Instagram, LinkedIn} from "@material-ui/icons";
import "./Contact.css";

const Contact = ({contactdata}) => {
    console.log(contactdata);
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
        <div className="contact__container">
            <p>
                Email : <span>{contactdata.email}</span>
            </p>
            <p>
                Github :<span>{contactdata.github}</span>
            </p>
            <div className="contact_icons">
                <a target="_blank "href={contactdata.facebook}>
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>
                <a target="_blank " href={contactdata.instagram}>
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>
                <a target="_blank " href={contactdata.linkedIn}>
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
