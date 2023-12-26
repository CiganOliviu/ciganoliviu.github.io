import { ResumeConfig } from "@components/configs/resume";

export enum DetailPageTypes {
      RESUME = 'resume'
}

export const getDetailPageParams = (url: string) => {
      return {
            pageType: url?.split('-')[0],
            identity: url?.split('-')[1],
            keySearchId: url?.split('-')[2]
      }
};

export const fetchResumeConfigObject = (keyTitle: string, resumePart: string) => {
      if (resumePart === 'education')
            return ResumeConfig.education.find((obj) => obj.title === keyTitle);

      if (resumePart === 'experience')
            return ResumeConfig.experience.find((obj) => obj.title === keyTitle);

      return undefined;
};