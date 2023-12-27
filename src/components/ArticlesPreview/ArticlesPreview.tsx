import { ArticlesPreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ArticleCard } from "@components/components/ArticleCard/ArticleCard";
import React from "react";
import { ProjectColumn, ProjectsFlexWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import { AppTheme } from "@components/utils/cssMedia";
import Link from "next/link";
import { Separator } from "@components/components/Resume/Resume.css";

export const ArticlesPreview = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ArticlesPreviewWrapper>
            {TextContainer({backText: 'Articles', overText: 'My Published Articles'})}
            <ProjectsFlexWrapper isMobile={isMobile()} isTablet={isTablet()}>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </ProjectsFlexWrapper>
            <Separator paddingValue={2} />
            <ContentLinkWrapper contentLinkBackground={AppTheme.darkerClose} style={{ textAlign: 'center' }}>
                <Link href={'/projects'}>Check Extra Work and Research</Link>
            </ContentLinkWrapper>
            <Separator paddingValue={2} />
        </ArticlesPreviewWrapper>
    )
}