import React, { FC } from "react";
import { getStandardHeaderForPages } from "@components/pages";
import { PreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import { AppTheme } from "@components/utils/cssMedia";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";
import { Footer } from "@components/components/Footer/Footer";
import { ArticlesConfigType } from "@components/utils/types";

type RenderArticlesListerPageType = {
    config: ArticlesConfigType[];
    isSoftwareArticles?: boolean;
};

export const RenderArticlesListerPage: FC<RenderArticlesListerPageType> = ({ config, isSoftwareArticles }) => {
    const backText = isSoftwareArticles ? 'Software' : 'Data Science';

    return (
        <React.Fragment>
            {getStandardHeaderForPages("Cigan Oliviu David", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
            <PreviewWrapper backgroundColor={isSoftwareArticles ? AppTheme.darkerClose : AppTheme.darkerOpen}>
                <ArticlesLister articlesList={config} backText={backText} overText={'Articles'}/>
                <Footer backgroundColor={isSoftwareArticles ? AppTheme.darkerOpen : AppTheme.darkerClose} />
            </PreviewWrapper>
        </React.Fragment>
    )
}