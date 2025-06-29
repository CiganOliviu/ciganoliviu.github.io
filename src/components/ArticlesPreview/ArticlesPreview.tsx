import { PreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import React, { FC } from "react";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import Link from "next/link";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";
import { ArticlesConfigType, ArticleType } from "@components/utils/types";
import { Separator } from "@components/components/Footer/Footer.css";

type ArticlesPreviewType = {
    backText: string;
    overText: string;
    backgroundColor: string;
    config: ArticlesConfigType[];
    articlesType: ArticleType;
};

export const ArticlesPreview: FC<ArticlesPreviewType> = ({ backText, overText, backgroundColor, config, articlesType }) => {
    const getLinkBasedOnArticlesType = () => {
        if (articlesType != null) {
            if (articlesType === ArticleType.Software) return 'posts/software';
            if (articlesType === ArticleType.DataScience) return 'posts/discrete';
        }
        return 'posts/values';
    };

    return (
        <PreviewWrapper backgroundColor={backgroundColor}>
            <ArticlesLister backText={backText} overText={overText} articlesList={config} />
            <Separator paddingValue={2} />
            {config.length > 0 &&
                <ContentLinkWrapper contentLinkBackground={backgroundColor} style={{ textAlign: 'center' }}>
                    <Link href={getLinkBasedOnArticlesType()}>Check Other Articles</Link>
                </ContentLinkWrapper>
            }
            <Separator paddingValue={2} />
        </PreviewWrapper>
    )
}