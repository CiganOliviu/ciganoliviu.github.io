import {
    ArticleCardContent,
    ArticleCardContentWrapper,
    ArticleCardThumbnail,
    ArticleCardTitle,
    ArticleCardWrapper
} from "@components/components/ArticleCard/ArticleCard.css";
import React, { FC } from "react";
import { InternalLink } from "@components/components/HeroCard/HeroCard.css";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { createCanonicalLink } from "@components/utils/detailPageManipulations";
import { ArticlesConfigType } from "@components/utils/types";

type ArticleCardContextType = {
    article: ArticlesConfigType;
};

export const ArticleCard: FC<ArticleCardContextType> = ({ article }) => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ArticleCardWrapper isMobile={isMobile()} isTablet={isTablet()}>
            <ArticleCardThumbnail src={article.thumbnail} responsiveScreen={isMobile() || isTablet()}/>
            <ArticleCardContentWrapper responsiveScreen={isMobile() || isTablet()}>
                <ArticleCardTitle>{article.title}</ArticleCardTitle>
                <ArticleCardContent dangerouslySetInnerHTML={article.previewHtmlField}/>
                <InternalLink href={`/article-detail-${createCanonicalLink(article.title)}`}>
                    Read more
                </InternalLink>
            </ArticleCardContentWrapper>
        </ArticleCardWrapper>
    )
};