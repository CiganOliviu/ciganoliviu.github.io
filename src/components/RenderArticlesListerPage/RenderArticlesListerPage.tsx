import React, { FC } from "react";
import { getStandardHeaderForPages } from "@components/pages";
import { PreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import { AppTheme } from "@components/utils/cssMedia";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";
import { Footer } from "@components/components/Footer/Footer";
import { ArticlesConfigType, ArticleType } from "@components/utils/types";
import { getTextsBasedOnArticlesType } from "@components/components/ArticlesPreview/ArticlesPreview";

type RenderArticlesListerPageType = {
    config: ArticlesConfigType[];
    articlesType?: ArticleType;
};

export const RenderArticlesListerPage: FC<RenderArticlesListerPageType> = ({ config, articlesType }) => {
    const texts = getTextsBasedOnArticlesType(articlesType);

    return (
        <React.Fragment>
            {getStandardHeaderForPages("Cigan Oliviu David", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
            <PreviewWrapper backgroundColor={AppTheme.darkerClose}>
                <ArticlesLister articlesList={config} backText={texts.backText} overText={texts.overText}/>
                <Footer backgroundColor={AppTheme.darkerOpen} />
            </PreviewWrapper>
        </React.Fragment>
    )
}