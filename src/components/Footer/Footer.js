import React from 'react'
import { faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                <div className="Copyright">
                    <div className="SocialMediaIcons">
                        <ExternalLink href="https://www.facebook.com/cigan.oliviu.31/"><FontAwesomeIcon className="Icon" id="Linkedin" icon={faLinkedin} /></ExternalLink>
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