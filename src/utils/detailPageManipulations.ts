import { ResumeConfig } from "@components/configs/resumeConfig";

import { ProjectsConfig } from "@components/configs/projectsConfig";

export enum DetailPageTypes {
      RESUME = 'resume',
      PROJECT = 'project'
}

export const getDetailPageParams = (url: string) => {
      return {
            pageType: url?.split('-')[0],
            identity: url?.split('-')[1],
            keySearchId: url?.split('-')[2]
      }
};

export const fetchResumeConfigObject = (keyTitle: string, resumePart: string) => {
      if (resumePart === 'education' && keyTitle !== 'Mathematics and Informatics')
            return ResumeConfig.education.find((obj) => obj.title === keyTitle);

      if (resumePart === 'experience')
            return ResumeConfig.experience.find((obj) => obj.title === keyTitle);

      return undefined;
};

export const fetchProjectConfigResponse = (keyTitle: string) => {
      return ProjectsConfig.find((obj) => obj.title === keyTitle);
};