import { ResumeConfig } from "@components/configs/resumeConfig";

import { ProjectsConfig } from "@components/configs/projectsConfig";

export enum DetailPageTypes {
      RESUME = 'resume',
      PROJECT = 'project'
}

export const getDetailPageParams = (url: string) => {
      const urlElements = url?.split('-');
      const [pageType, identity, ...keySearchId] = urlElements;

      return {
            pageType,
            identity,
            keySearchId: keySearchId.join('-'),
      };
};

export const fetchResumeConfigObject = (keyTitle: string, resumePart: string) => {
      if (resumePart === 'education' && keyTitle !== 'Mathematics and Informatics')
            return ResumeConfig.education.find((obj) => createCanonicalLink(obj.title) === keyTitle);

      if (resumePart === 'experience')
            return ResumeConfig.experience.find((obj) => createCanonicalLink(obj.title) === keyTitle);

      return undefined;
};

export const fetchProjectConfigResponse = (keyTitle: string) => {
      return ProjectsConfig.find((obj) => createCanonicalLink(obj.title) === keyTitle);
};

export const createCanonicalLink = (canonicalString: string): string => {
      return canonicalString.toLowerCase().replace(/\s+/g, '-');
}