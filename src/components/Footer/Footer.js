import { faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Footer({ImageWallpaper}) {

    const backgroundImageSetup = {
        backgroundImage: `url(${ImageWallpaper})`,
    }

    return (
        <footer class="Wallpaper" style={backgroundImageSetup}>
            <div className="Content">
                <div className="Copyright">
                    <div className="SocialMediaIcons">
                        <FontAwesomeIcon id="Linkedin" icon={faLinkedin} /> 
                        <FontAwesomeIcon id="Gmail" icon={faEnvelope} /> 
                        <FontAwesomeIcon id="Facebook" icon={faFacebookMessenger} />
                    </div> 
                    <p><FontAwesomeIcon icon={faCopyright} /> Copyright Cigan Oliviu-David, all rights reserved {(new Date().getFullYear())}</p>
                </div> 
            </div> 
        </footer>
    )
}

export default Footer;