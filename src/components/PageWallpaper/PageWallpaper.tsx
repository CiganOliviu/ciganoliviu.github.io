import { FC } from "react";
import { PageWallpaperCss } from "@components/components/PageWallpaper/PageWallpaper.css";
import { Logo } from "@components/components/Logo/Logo";

type PageWallpaperType = {
    url: string;
};

export const PageWallpaper: FC<PageWallpaperType> = ({ url }) => {
    return (
        <PageWallpaperCss url={url}>
            <Logo />
        </PageWallpaperCss>
    )
}