import React, { FC } from "react";
import { Logo } from "@components/components/Logo/Logo";
import { Footer } from "@components/components/Footer/Footer";
import { AppTheme } from "@components/utils/cssMedia";
import { ArticlesConfig } from "@components/configs/articlesConfig";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { ArticlesPreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import Head from "next/head";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";

const Articles: FC = () => {
    const { isMobile } = useGetScreenSize();

    return (
        <React.Fragment>
            <Head>
                <title>Articles</title>
            </Head>
            <ArticlesPreviewWrapper>
                <Logo />
                {!isMobile() && <ScrollTopButton />}
                <ArticlesLister articlesList={ArticlesConfig} />
                <Footer backgroundColor={AppTheme.darkerOpen}  />
            </ArticlesPreviewWrapper>
        </React.Fragment>
    )
}

export default Articles;