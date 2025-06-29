import React, { FC } from "react";
import { RenderArticlesListerPage } from "@components/components/RenderArticlesListerPage/RenderArticlesListerPage";
import { DiscreteJumpsArticlesConfig } from "@components/configs/discreteJumpsArticlesConfig";
import { ArticleType } from "@components/utils/types";

const discrete: FC = () => {
    return <RenderArticlesListerPage config={DiscreteJumpsArticlesConfig} articlesType={ArticleType.DataScience} />;
}

export default discrete;