import { ArticlesPreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import React from "react";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import { AppTheme } from "@components/utils/cssMedia";
import Link from "next/link";
import { Separator } from "@components/components/Resume/Resume.css";
import { ArticlesConfigPreview } from "@components/configs/articlesConfig";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";

export const ArticlesPreview = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ArticlesPreviewWrapper>
            <ArticlesLister articlesList={ArticlesConfigPreview} />
            <Separator paddingValue={2} />
            <ContentLinkWrapper contentLinkBackground={AppTheme.darkerClose} style={{ textAlign: 'center' }}>
                <Link href={'/articles'}>Check Other Articles</Link>
            </ContentLinkWrapper>
            <Separator paddingValue={2} />
        </ArticlesPreviewWrapper>
    )
}