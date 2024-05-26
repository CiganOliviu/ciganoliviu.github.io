import { ArticlesConfigType } from "@components/utils/types";
import React, { FC } from "react";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ArticleCard } from "@components/components/ArticleCard/ArticleCard";
import { FlexWrapper } from "@components/components/ArticlesPreview/Articles.css";

type ArticlesListerType = {
    backText: string;
    overText: string;
    articlesList: ArticlesConfigType[];
};

export const ArticlesLister: FC<ArticlesListerType> = ({ backText, overText, articlesList }) => {
    return (
        <React.Fragment>
            {TextContainer({backText: backText, overText: overText})}
            <FlexWrapper>
                {articlesList.map((article: ArticlesConfigType) => {
                    return <ArticleCard article={article} key={article.title}/>
                })}
            </FlexWrapper>
        </React.Fragment>
    )
};
