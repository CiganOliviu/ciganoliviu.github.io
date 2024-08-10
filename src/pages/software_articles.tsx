import React, { FC } from "react";
import { SoftwareArticlesConfig } from "@components/configs/softwareArticlesConfig";
import { RenderArticlesListerPage } from "@components/components/RenderArticlesListerPage/RenderArticlesListerPage";

const software_articles: FC = () => {
    return (
        <RenderArticlesListerPage config={SoftwareArticlesConfig}/>
    )
}

export default software_articles;