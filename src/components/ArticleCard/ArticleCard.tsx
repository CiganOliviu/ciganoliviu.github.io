import {
    ArticleCardContent,
    ArticleCardContentWrapper,
    ArticleCardThumbnail,
    ArticleCardTitle,
    ArticleCardWrapper
} from "@components/components/ArticleCard/ArticleCard.css";
import React, { FC } from "react";
import { InternalLink } from "@components/components/HeroCard/HeroCard.css";
import { ArticlesConfigType } from "@components/utils/types";

type ArticleCardContextType = {
    article: ArticlesConfigType;
};

export const ArticleCard: FC<ArticleCardContextType> = ({ article }) => {
    return (
        <ArticleCardWrapper>
            <ArticleCardThumbnail src={article.thumbnail} />
            <ArticleCardContentWrapper>
                <ArticleCardTitle>{article.title}</ArticleCardTitle>
                <ArticleCardContent dangerouslySetInnerHTML={article.previewHtmlField} />
                <InternalLink href={`/article-detail-${article.id}`}>
                    Read Article
                </InternalLink>
            </ArticleCardContentWrapper>
        </ArticleCardWrapper>
    )
};