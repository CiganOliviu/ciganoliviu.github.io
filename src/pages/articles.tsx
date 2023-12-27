import React, { FC } from "react";
import { ProjectsFlexWrapper, ProjectsWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { Logo } from "@components/components/Logo/Logo";
import { Footer } from "@components/components/Footer/Footer";
import { AppTheme } from "@components/utils/cssMedia";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ArticlesConfig } from "@components/configs/articlesConfig";
import { ArticleCard } from "@components/components/ArticleCard/ArticleCard";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { ArticlesPreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { ArticlesConfigType } from "@components/utils/types";

const Articles: FC = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ArticlesPreviewWrapper>
            <Logo />
            {!isMobile() && <ScrollTopButton />}
            {TextContainer({backText: 'Articles', overText: 'My Published Articles'})}
            <ProjectsFlexWrapper isMobile={isMobile()} isTablet={isTablet()}>
                {ArticlesConfig.map((article: ArticlesConfigType) => {
                    return <ArticleCard article={article} key={article.title}/>
                })}
            </ProjectsFlexWrapper>
            <Footer backgroundColor={AppTheme.darkerOpen}  />
        </ArticlesPreviewWrapper>
    )
}

export default Articles;