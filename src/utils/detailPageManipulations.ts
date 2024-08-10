import { ResumeConfig } from "@components/configs/resumeConfig";

import { ProjectsConfig } from "@components/configs/projectsConfig";
import { SoftwareArticlesConfig } from "@components/configs/softwareArticlesConfig";
import { ArticlesConfigType, EducationAndExperienceType, ProjectConfigType } from "@components/utils/types";
import { DiscreteJumpsArticlesConfig } from "@components/configs/discreteJumpsArticlesConfig";

export enum DetailPageTypes {
    RESUME = 'resume',
    PROJECT = 'project',
    ARTICLE = 'article'
}

export const getDetailPageParams = (url: string) => {
    if (url) {
        const urlElements = url?.split('-');
        const [pageType, identity, ...keySearchId] = urlElements;

        return {
            pageType,
            identity,
            keySearchId: keySearchId.join('-'),
        };
    }

    return {};
};

export const getFetchWrapper = (pageType: string) => {
    if (pageType === DetailPageTypes.RESUME)
        return fetchResumeConfigObject;
    else if (pageType === DetailPageTypes.PROJECT)
        return fetchProjectConfigResponse;

    return fetchArticleConfigResponse;
}

export const fetchResumeConfigObject = (keyTitle: string, resumePart: string): EducationAndExperienceType | undefined => {
    if (resumePart === 'education')
        return ResumeConfig.education.find((obj) => obj.id === keyTitle);

    if (resumePart === 'experience')
        return ResumeConfig.experience.find((obj) => obj.id === keyTitle);

    return undefined;
};

export const fetchProjectConfigResponse = (keyTitle: string): ProjectConfigType | undefined => {
    return ProjectsConfig.find((obj) => obj.id === keyTitle);
};

export const fetchArticleConfigResponse = (keyTitle: string): ArticlesConfigType | undefined  => {
    const allArticles = SoftwareArticlesConfig.concat(DiscreteJumpsArticlesConfig)
    return allArticles.find((obj) => obj.id === keyTitle);
};
