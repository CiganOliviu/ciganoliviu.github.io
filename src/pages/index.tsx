import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { Resume } from "@components/components/Resume/Resume";
import { KnowMeMore } from "@components/components/KnowMeMore/KnowMeMore";
import { WhatIDo } from "@components/components/WhatIDo/WhatIDo";
import { Contact } from "@components/components/Contact/Contact";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import React, { useRef } from "react";
import Head from "next/head";
import { ArticlesPreview } from "@components/components/ArticlesPreview/ArticlesPreview";
import { AppTheme } from "@components/utils/cssMedia";
import { ArticlesConfigPreview } from "@components/configs/articlesConfig";

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
    const { isMobile } = useGetScreenSize();
    const resultRef = useRef<HTMLDivElement>();

    return (
       <React.Fragment>
           {getStandardHeaderForPages("Cigan Oliviu David | Software Engineer", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
           {!isMobile() && <ScrollTopButton />}
            <LandingArea nextSectionReference={resultRef} />
            <KnowMeMore ref={resultRef} />
            <WhatIDo />
            <Resume />
            <ArticlesPreview backgroundColor={AppTheme.darkerOpen} backText={'Software'} overText={'Articles'} config={ArticlesConfigPreview} />
            <ArticlesPreview backgroundColor={AppTheme.darkerClose} backText={'Discrete Jumps'} overText={'Articles'} config={[]}/>
            <Contact />
            <Footer backgroundColor={AppTheme.darkerClose} />
       </React.Fragment>
    )
}
