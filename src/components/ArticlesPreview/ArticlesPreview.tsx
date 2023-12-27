import { ArticlesPreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ArticleCard } from "@components/components/ArticleCard/ArticleCard";
import React from "react";
import { ProjectsFlexWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import { AppTheme } from "@components/utils/cssMedia";
import Link from "next/link";
import { Separator } from "@components/components/Resume/Resume.css";
import { ArticlesConfig } from "@components/configs/articlesConfig";
import { ArticlesConfigType } from "@components/utils/types";

export const ArticlesPreview = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ArticlesPreviewWrapper>
            {TextContainer({backText: 'Articles', overText: 'My Published Articles'})}
            <ProjectsFlexWrapper isMobile={isMobile()} isTablet={isTablet()}>
                {ArticlesConfig.map((article: ArticlesConfigType) => {
                    return <ArticleCard article={article} key={article.title}/>
                })}
            </ProjectsFlexWrapper>
            <Separator paddingValue={2} />
            <ContentLinkWrapper contentLinkBackground={AppTheme.darkerClose} style={{ textAlign: 'center' }}>
                <Link href={'/articles'}>Check Other Articles</Link>
            </ContentLinkWrapper>
            <Separator paddingValue={2} />
        </ArticlesPreviewWrapper>
    )
}