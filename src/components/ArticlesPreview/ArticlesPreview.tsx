import { PreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import React, { FC } from "react";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import Link from "next/link";
import { Separator } from "@components/components/Resume/Resume.css";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";
import { ArticlesConfigType } from "@components/utils/types";

type ArticlesPreviewType = {
    backText: string;
    overText: string;
    backgroundColor: string;
    config: ArticlesConfigType[];
    isSoftwareArticles?: boolean;
};

export const ArticlesPreview: FC<ArticlesPreviewType> = ({ backText, overText, backgroundColor, config, isSoftwareArticles }) => {
    return (
        <PreviewWrapper backgroundColor={backgroundColor}>
            <ArticlesLister backText={backText} overText={overText} articlesList={config} />
            <Separator paddingValue={2} />
            {config.length > 0 &&
                <ContentLinkWrapper contentLinkBackground={backgroundColor} style={{ textAlign: 'center' }}>
                    <Link href={isSoftwareArticles ? 'posts/software' : 'posts/discrete'}>Check Other Articles</Link>
                </ContentLinkWrapper>
            }
            <Separator paddingValue={2} />
        </PreviewWrapper>
    )
}