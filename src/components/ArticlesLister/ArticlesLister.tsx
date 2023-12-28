import { ArticlesConfigType } from "@components/utils/types";
import React, { FC } from "react";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ProjectsFlexWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { ArticleCard } from "@components/components/ArticleCard/ArticleCard";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

type ArticlesListerType = {
    articlesList: ArticlesConfigType[];
};

export const ArticlesLister: FC<ArticlesListerType> = ({ articlesList }) => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <React.Fragment>
            {TextContainer({backText: 'Articles', overText: 'My Published Articles'})}
            <ProjectsFlexWrapper isMobile={isMobile()} isTablet={isTablet()}>
                {articlesList.map((article: ArticlesConfigType) => {
                    return <ArticleCard article={article} key={article.title}/>
                })}
            </ProjectsFlexWrapper>
        </React.Fragment>
    )
};
