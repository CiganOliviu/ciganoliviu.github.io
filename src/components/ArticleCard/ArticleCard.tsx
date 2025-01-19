import {
    ArticleCardContent,
    ArticleCardContentWrapper, ArticleCardSubtitle,
    ArticleCardThumbnail,
    ArticleCardTitle,
    ArticleCardWrapper
} from "@components/components/ArticleCard/ArticleCard.css";
import React, { FC } from "react";
import { InternalLink } from "@components/components/LandingArea/LandingArea.css";
import { ArticlesConfigType } from "@components/utils/types";
import { getTextSizeBasedOnBigBreakpoint } from "@components/utils/generalManipulations";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

type ArticleCardContextType = {
    article: ArticlesConfigType;
};

export const ArticleCard: FC<ArticleCardContextType> = ({ article }) => {
    const { isBigScreen } = useGetScreenSize();

    return (
        <ArticleCardWrapper>
            <ArticleCardThumbnail src={article.thumbnail} alt={article.thumbnail} />
            <ArticleCardContentWrapper>
                <ArticleCardTitle>{article.title}</ArticleCardTitle>
                <ArticleCardSubtitle>{article.subtitle}</ArticleCardSubtitle>
                <ArticleCardContent>
                    {getTextSizeBasedOnBigBreakpoint(article.previewField, isBigScreen())}...
                </ArticleCardContent>
                <InternalLink href={`/posts/article-detail-${article.id}`}>
                    Read Article
                </InternalLink>
            </ArticleCardContentWrapper>
        </ArticleCardWrapper>
    )
};