import React from 'react'
import { scrollToRef } from "../../utils/refScroller";
import './HeroCard.css'

function HeroCard({ImageWallpaper, Ref}) {

    const backgroundImageSetup = {
        backgroundImage: `url(${ImageWallpaper})`,
    }

    const executeScroll = () => scrollToRef(Ref);

    return (
        <div className="HeroCard" style={backgroundImageSetup} >
            <div className="Content">
                <h1>This is me in a few images</h1>
                <h3>Multiply your life success!</h3>
                <div>&nbsp;</div>
                <button className="ButtonLink" onClick={executeScroll}>Next Chapter</button>
            </div>
        </div>
    )
}

export default HeroCard;