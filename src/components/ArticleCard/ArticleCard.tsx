import {
    ArticleCardContent, ArticleCardContentWrapper,
    ArticleCardThumbnail, ArticleCardTitle,
    ArticleCardWrapper
} from "@components/components/ArticleCard/ArticleCard.css";
import VodBackground from "@components/assets/VodBackground.png";
import React from "react";
import { ProjectCardContent } from "@components/components/ProjectCard/ProjectCard.css";
import { InternalLink } from "@components/components/HeroCard/HeroCard.css";
import { createCanonicalLink } from "@components/utils/detailPageManipulations";
import { Separator } from "@components/components/Resume/Resume.css";

export const ArticleCard = () => {
    return (
        <ArticleCardWrapper>
            <ArticleCardThumbnail src={VodBackground.src}/>
            <ArticleCardContentWrapper>
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