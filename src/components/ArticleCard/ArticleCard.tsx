import {
    ArticleCardContent,
    ArticleCardContentWrapper,
    ArticleCardThumbnail,
    ArticleCardTitle,
    ArticleCardWrapper
} from "@components/components/ArticleCard/ArticleCard.css";
import VodBackground from "@components/assets/VodBackground.png";
import React from "react";
import { InternalLink } from "@components/components/HeroCard/HeroCard.css";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

type ArticleCardType = {

};

export const ArticleCard = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ArticleCardWrapper responsiveScreen={isMobile() || isTablet()}>
            <ArticleCardThumbnail src={VodBackground.src} responsiveScreen={isMobile() || isTablet()}/>
            <ArticleCardContentWrapper responsiveScreen={isMobile() || isTablet()}>
                <ArticleCardTitle>Are books relevant in Software Design?</ArticleCardTitle>
                <ArticleCardContent>
                    deLatin professor at Hampden-Latin professor at Hampden-Latin professor at Hampden-Latin professor at Hampden-Latin professor at Hampden-Latin professor at Hampden-Latin professor at Hampden- Finibus
                </ArticleCardContent>
                <InternalLink href='#'>
                    Read Article
                </InternalLink>
            </ArticleCardContentWrapper>
        </ArticleCardWrapper>
    )
};