import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { Footer } from "@components/components/Footer/Footer";
import React from "react";
import Head from "next/head";
import { ArticlesPreview } from "@components/components/ArticlesPreview/ArticlesPreview";
import { AppTheme } from "@components/utils/cssMedia";
import { SoftwareArticlesConfigPreview } from "@components/configs/softwareArticlesConfig";
import { DiscreteJumpsArticlesConfigPreview } from "@components/configs/discreteJumpsArticlesConfig";
import { ValuesArticlesConfig } from "@components/configs/valuesArticlesConfig";
import { ArticleType } from "@components/utils/types";

export const getStandardHeaderForPages = (title: string, metaDescription?: string) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content="Cigan Oliviu-David, technology solutions, mobile apps, web development, AI, backend, software" />
            <meta name="author" content="Cigan Oliviu-David" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
};

export default function Home() {
    return (
       <React.Fragment>
           {getStandardHeaderForPages("Cigan Oliviu David | Software Engineer", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
            <LandingArea />
            <ArticlesPreview backgroundColor={AppTheme.darkerClose} config={SoftwareArticlesConfigPreview} articlesType={ArticleType.Software} />
            <ArticlesPreview backgroundColor={AppTheme.darkerOpen} config={DiscreteJumpsArticlesConfigPreview} articlesType={ArticleType.DataScience} />
            <ArticlesPreview backgroundColor={AppTheme.darkerClose} config={ValuesArticlesConfig} articlesType={ArticleType.Values} />
            <Footer backgroundColor={AppTheme.darkerOpen} />
       </React.Fragment>
    );
}
