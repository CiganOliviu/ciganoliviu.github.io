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

type ArticleCardType = {
    article: any;
};

export const ArticleCard: FC<ArticleCardType> = ({ article }) => {
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