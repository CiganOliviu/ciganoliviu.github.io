import React from "react";
import { PreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import { AppTheme } from "@components/utils/cssMedia";
import { getStandardHeaderForPages } from "@components/pages";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { Logo } from "@components/components/Logo/Logo";
import { KnowMeMore } from "@components/components/KnowMeMore/KnowMeMore";
import { Resume } from "@components/components/Resume/Resume";
import { Footer } from "@components/components/Footer/Footer";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

export const RenderExperiencePage = () => {
    const { isMobile } = useGetScreenSize();

    return (
        <PreviewWrapper backgroundColor={AppTheme.darkerClose}>
            {getStandardHeaderForPages("Cigan Oliviu David | Software Engineer", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
            {!isMobile() && <ScrollTopButton />}
            <Logo />
            <KnowMeMore />
            <Resume />
            <Footer backgroundColor={AppTheme.darkerClose} />
        </PreviewWrapper>
    );
}