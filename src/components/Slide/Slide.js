import React from 'react'
import { scrollToRef } from "../../utils/refScroller";
import "./Slide.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slide({ImageWallpaper, Ref, LinearGradient, Title, Content}) {

    const backgroundImageSetup = {
        backgroundImage: `linear-gradient(${LinearGradient}), url(${ImageWallpaper})`,
    }

    const executeScroll = () => scrollToRef(Ref);

    return (
        <div className="Wallpaper" style={backgroundImageSetup}>
            <div className="Content">
                    <h1 data-aos={"fade-down"}>{Title}</h1>
                    <br/>
                    {
                    Content.split('\n').map((item, key) => {
                        return (
                            <span key={key}>
                                <p data-aos={"fade-up"}><b>{ item }</b></p>
                                <FontAwesomeIcon icon="fa-brands fa-react" />
                            </span>
                        )
                    })}
                    <div>&nbsp;</div>
                    <button className="ButtonLink" onClick={executeScroll}>Next Chapter</button>
            </div> 
        </div>
    )
}

export default Slide;