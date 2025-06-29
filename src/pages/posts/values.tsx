import React, { FC } from "react";
import { RenderArticlesListerPage } from "@components/components/RenderArticlesListerPage/RenderArticlesListerPage";
import { ValuesArticlesConfig } from "@components/configs/valuesArticlesConfig";

const values: FC = () => {
    return <RenderArticlesListerPage config={ValuesArticlesConfig} />;
}

export default values;