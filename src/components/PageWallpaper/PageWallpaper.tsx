import React, { FC } from "react";
import {
    PageWallpaperCss,
    PageWallpaperSubtitle,
    PageWallpaperTitle
} from "@components/components/PageWallpaper/PageWallpaper.css";
import { LandingAreaContainer } from "@components/components/LandingArea/LandingArea.css";
import { Separator } from "@components/components/Footer/Footer.css";

type PageWallpaperType = {
    url: string;
    title: string;
    subtitle: string;
};

export const PageWallpaper: FC<PageWallpaperType> = ({ url, title, subtitle }) => {
    return (
        <PageWallpaperCss url={url}>
            <LandingAreaContainer>
                <PageWallpaperTitle>{title}</PageWallpaperTitle>
                <Separator paddingValue={0.5} />
                <PageWallpaperSubtitle>{subtitle}</PageWallpaperSubtitle>
            </LandingAreaContainer>
        </PageWallpaperCss>
    )
}