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
                <h1>Cigan Oliviu</h1>
                <h3>Do you want to know more? Check the next chapter!</h3>
                <div>&nbsp;</div>
                <button className="ButtonLink" onClick={executeScroll}>Next Chapter</button>
            </div>
        </div>
    )
}

export default HeroCard;