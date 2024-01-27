import { ResumeConfig } from "@components/configs/resumeConfig";

import { ProjectsConfig } from "@components/configs/projectsConfig";
import { ArticlesConfig } from "@components/configs/articlesConfig";

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

export const fetchResumeConfigObject = (keyTitle: string, resumePart: string) => {
      if (resumePart === 'education' && keyTitle !== 'Mathematics and Informatics')
            return ResumeConfig.education.find((obj) => obj.id === keyTitle);

      if (resumePart === 'experience')
            return ResumeConfig.experience.find((obj) => obj.id === keyTitle);

      return undefined;
};

export const fetchProjectConfigResponse = (keyTitle: string) => {
      return ProjectsConfig.find((obj) => obj.title === keyTitle);
};

export const fetchArticleConfigResponse = (keyTitle: string) => {
      return ArticlesConfig.find((obj) => obj.title === keyTitle);
};

export const createCanonicalLink = (str: string): string => {
      return str;
}