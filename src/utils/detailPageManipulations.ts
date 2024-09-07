import { ResumeConfig } from "@components/configs/resumeConfig";
import { SoftwareArticlesConfig } from "@components/configs/softwareArticlesConfig";
import { ArticlesConfigType, EducationAndExperienceType } from "@components/utils/types";
import { DiscreteJumpsArticlesConfig } from "@components/configs/discreteJumpsArticlesConfig";

export enum DetailPageTypes {
    RESUME = 'resume',
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

    return fetchArticleConfigResponse;
}

export const fetchResumeConfigObject = (keyTitle: string, resumePart: string): EducationAndExperienceType | undefined => {
    if (resumePart === 'education')
        return ResumeConfig.education.find((obj) => obj.id === keyTitle);

    if (resumePart === 'experience')
        return ResumeConfig.experience.find((obj) => obj.id === keyTitle);

    return undefined;
};

export const fetchArticleConfigResponse = (keyTitle: string): ArticlesConfigType | undefined  => {
    const allArticles = SoftwareArticlesConfig.concat(DiscreteJumpsArticlesConfig)
    return allArticles.find((obj) => obj.id === keyTitle);
};
