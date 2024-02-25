import { HeroCard } from "@components/components/HeroCard/HeroCard";
import { Resume } from "@components/components/Resume/Resume";
import { KnowMeMore } from "@components/components/KnowMeMore/KnowMeMore";
import { WhatIDo } from "@components/components/WhatIDo/WhatIDo";
import { Contact } from "@components/components/Contact/Contact";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import React, { useRef } from "react";
import { PreviewProjects } from "@components/components/ProjectsPreview/PreviewProjects";
import Head from "next/head";
import { ArticlesPreview } from "@components/components/ArticlesPreview/ArticlesPreview";
import { AppTheme } from "@components/utils/cssMedia";

export default function Home() {
    const { isMobile } = useGetScreenSize();
    const resultRef = useRef<HTMLDivElement>();

    return (
       <>
           <Head>
               <title>Cigan Oliviu-David</title>
               <meta name="description" content="Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections." />
           </Head>
           {!isMobile() && <ScrollTopButton />}
            <HeroCard nextSectionReference={resultRef} />
            <KnowMeMore ref={resultRef} />
            <WhatIDo />
            <Resume />
            <ArticlesPreview />
            <PreviewProjects />
            <Contact />
            <Footer backgroundColor={AppTheme.darkerClose} />
       </>
    )
}
