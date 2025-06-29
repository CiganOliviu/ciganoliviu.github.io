import { PreviewWrapper } from "@components/components/ArticlesPreview/Articles.css";
import React, { FC } from "react";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import Link from "next/link";
import { ArticlesLister } from "@components/components/ArticlesLister/ArticlesLister";
import { ArticlesConfigType, ArticleType } from "@components/utils/types";
import { Separator } from "@components/components/Footer/Footer.css";

type ArticlesPreviewType = {
    backgroundColor: string;
    config: ArticlesConfigType[];
    articlesType: ArticleType;
};

export const getTextsBasedOnArticlesType = (articlesType: ArticleType) => {
    if (articlesType != null) {
        if (articlesType === ArticleType.Software) return { backText: 'Science', overText: 'Alpha Software' };
        if (articlesType === ArticleType.DataScience) return { backText: 'Science', overText: 'Discrete Jumps' };
    }
    return { backText: 'Science', overText: 'Values' };
};

export const ArticlesPreview: FC<ArticlesPreviewType> = ({ backgroundColor, config, articlesType }) => {
    const getLinkBasedOnArticlesType = () => {
        if (articlesType != null) {
            if (articlesType === ArticleType.Software) return 'posts/software';
            if (articlesType === ArticleType.DataScience) return 'posts/discrete';
        }
        return 'posts/values';
    };

    const texts = getTextsBasedOnArticlesType(articlesType);
    return (
        <PreviewWrapper backgroundColor={backgroundColor}>
            <ArticlesLister backText={texts.backText} overText={texts.overText} articlesList={config} />
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