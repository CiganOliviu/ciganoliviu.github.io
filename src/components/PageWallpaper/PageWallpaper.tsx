import React, { FC } from "react";
import {
    PageWallpaperCss,
    PageWallpaperSubtitle,
    PageWallpaperTitle
} from "@components/components/PageWallpaper/PageWallpaper.css";
import { Logo } from "@components/components/Logo/Logo";
import { HeroCardContainer } from "@components/components/HeroCard/HeroCard.css";
import { Separator } from "@components/components/Resume/Resume.css";

type PageWallpaperType = {
    url: string;
    title: string;
    subtitle: string;
};

export const PageWallpaper: FC<PageWallpaperType> = ({ url, title, subtitle }) => {
    return (
        <PageWallpaperCss url={url}>
            <Logo />
            <HeroCardContainer>
                <PageWallpaperTitle>{title}</PageWallpaperTitle>
                <Separator paddingValue={0.5} />
                <PageWallpaperSubtitle>{subtitle}</PageWallpaperSubtitle>
            </HeroCardContainer>
        </PageWallpaperCss>
    )
}