import React from 'react'
import { scrollToRef } from "../../utils/refScroller";
import "./Slide.css"

function Slide({ImageWallpaper, Ref, LinearGradient, Title, Content}) {

    const backgroundImageSetup = {
        backgroundImage: `linear-gradient(${LinearGradient}), url(${ImageWallpaper})`,
    }

    const executeScroll = () => scrollToRef(Ref);

    return (
        <div className="Wallpaper" style={backgroundImageSetup}>
            <div className="Content">
                    <h1>{Title}</h1>
                    <br/>
                    {
                    Content.split('\n').map(function(item, key) {
                        return (
                            <span key={key}>
                                <p><b>{ item }</b></p>
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