import React, { FC } from "react";
import { RenderArticlesListerPage } from "@components/components/RenderArticlesListerPage/RenderArticlesListerPage";
import { DiscreteJumpsArticlesConfig } from "@components/configs/discreteJumpsArticlesConfig";

const discrete_jumps_articles: FC = () => {
    return (
        <RenderArticlesListerPage config={DiscreteJumpsArticlesConfig}/>
    )
}

export default discrete_jumps_articles;