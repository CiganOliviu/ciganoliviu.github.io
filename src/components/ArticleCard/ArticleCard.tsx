import {
    ArticleCardContent,
    ArticleCardContentWrapper,
    ArticleCardSubtitle,
    ArticleCardThumbnail,
    ArticleCardTitle,
    ArticleCardWrapper, TwoColumnFlex
} from "@components/components/ArticleCard/ArticleCard.css";
import React, { FC } from "react";
import { InternalLink } from "@components/components/LandingArea/LandingArea.css";
import { ArticlesConfigType } from "@components/utils/types";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

type ArticleCardContextType = {
    article: ArticlesConfigType;
};

export const getTextSizeBasedOnBigBreakpoint = (text: string, isBigScreen: boolean): string => {
    return isBigScreen ? text : text.slice(0, 150);
}
export const ArticleCard: FC<ArticleCardContextType> = ({ article }) => {
    const { isBigScreen } = useGetScreenSize();

    return (
        <ArticleCardWrapper>
            <ArticleCardThumbnail src={article.thumbnail} alt={article.thumbnail} />
            <ArticleCardContentWrapper>
                <ArticleCardTitle>{article.title}</ArticleCardTitle>
                <TwoColumnFlex>
                    <ArticleCardSubtitle>{article.postDate}</ArticleCardSubtitle>
                    <ArticleCardSubtitle>{article.readDuration}</ArticleCardSubtitle>
                </TwoColumnFlex>
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