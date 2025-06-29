import React, { FC } from "react";
import { RenderArticlesListerPage } from "@components/components/RenderArticlesListerPage/RenderArticlesListerPage";
import { ValuesArticlesConfig } from "@components/configs/valuesArticlesConfig";
import { ArticleType } from "@components/utils/types";

const values: FC = () => {
    return <RenderArticlesListerPage config={ValuesArticlesConfig} articlesType={ArticleType.Values} />;
}

export default values;