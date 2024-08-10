import { useGetScreenSize } from "@components/hooks/useScreenSize";
import React, { FC } from "react";
import { getStandardHeaderForPages } from "@components/pages";
import { ArticlesPreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import { AppTheme } from "@components/utils/cssMedia";
import { Logo } from "@components/components/Logo/Logo";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";
import { Footer } from "@components/components/Footer/Footer";
import { ArticlesConfigType } from "@components/utils/types";

type RenderArticlesListerPageType = {
    config: ArticlesConfigType[];
    isSoftwareArticles?: boolean;
};

export const RenderArticlesListerPage: FC<RenderArticlesListerPageType> = ({ config, isSoftwareArticles }) => {
    const { isMobile } = useGetScreenSize();
    const backText = isSoftwareArticles ? 'Software' : 'Discrete Jumps';

    return (
        <React.Fragment>
            {getStandardHeaderForPages("Cigan Oliviu David", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
            <ArticlesPreviewWrapper backgroundColor={AppTheme.darkerClose}>
                <Logo />
                {!isMobile() && <ScrollTopButton />}
                <ArticlesLister articlesList={config} backText={backText} overText={'Articles'}/>
                <Footer backgroundColor={isSoftwareArticles ? AppTheme.darkerClose : AppTheme.darkerOpen} />
            </ArticlesPreviewWrapper>
        </React.Fragment>
    )
}