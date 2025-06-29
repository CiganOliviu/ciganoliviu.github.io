import React, { FC } from "react";
import { SoftwareArticlesConfig } from "@components/configs/softwareArticlesConfig";
import { RenderArticlesListerPage } from "@components/components/RenderArticlesListerPage/RenderArticlesListerPage";
import { ArticleType } from "@components/utils/types";

const software: FC = () => {
    return <RenderArticlesListerPage config={SoftwareArticlesConfig} articlesType={ArticleType.Software}  />;
}

export default software;