import React from 'react'
import {
    faCss3,
    faFacebookMessenger,
    faGit,
    faHtml5,
    faLinkedin,
    faNode,
    faPython,
    faReact
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from "react-external-link";
import './Footer.css'

function Footer({ImageWallpaper}) {

    const backgroundImageSetup = {
        backgroundImage: `url(${ImageWallpaper})`,
    }

    return (
        <footer className="Wallpaper" style={backgroundImageSetup}>
            <div className="Content">
                <div className="Technologies">
                    <p><b>Most used technologies over time</b></p>
                    <FontAwesomeIcon className="Icon" id="React" icon={faHtml5} />
                    <FontAwesomeIcon className="Icon" id="Css3" icon={faCss3} />
                    <FontAwesomeIcon className="Icon" id="React" icon={faReact} />
                    <FontAwesomeIcon className="Icon" id="Node" icon={faNode} />
                    <FontAwesomeIcon className="Icon" id="Python" icon={faPython} />
                    <FontAwesomeIcon className="Icon" id="Git" icon={faGit} />
                </div>
                <div className="BreathingSpace"></div>
                <div className="Copyright">
                    <div className="SocialMediaIcons">
                        <ExternalLink href="https://www.linkedin.com/in/oliviu-david-c-72489015b/"><FontAwesomeIcon className="Icon" id="Linkedin" icon={faLinkedin} /></ExternalLink>
                        <ExternalLink href="mailto:ciganoliviudavid@gmail.com"><FontAwesomeIcon className="Icon" id="Gmail" icon={faEnvelope} /></ExternalLink>
                        <ExternalLink href="https://www.facebook.com/cigan.oliviu.31/"><FontAwesomeIcon className="Icon" id="Facebook" icon={faFacebookMessenger} /></ExternalLink>
                    </div> 
                    <p><FontAwesomeIcon icon={faCopyright} /> Copyright Cigan Oliviu-David, all rights reserved {(new Date().getFullYear())}</p>
                </div> 
            </div> 
        </footer>
    )
}

export default Footer;