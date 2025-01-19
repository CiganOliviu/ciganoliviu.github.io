import React, { FC } from "react";
import { SoftwareArticlesConfig } from "@components/configs/softwareArticlesConfig";
import { RenderArticlesListerPage } from "@components/components/RenderArticlesListerPage/RenderArticlesListerPage";

const software: FC = () => {
    return (
        <RenderArticlesListerPage config={SoftwareArticlesConfig} isSoftwareArticles={true} />
    )
}

export default software;