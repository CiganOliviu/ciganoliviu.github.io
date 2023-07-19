export type resumeConfigItemType = {
    title: string,
    percentage: number;
};

type ContentCardType = {
    date: string,
    title: string,
    subtitle: string,
    content: string,
};

export type ContentCardContext = {
    context: ContentCardType
};

export type DoCardType = {
    icon: string,
    title: string,
    content: string
};

export type DoCardContext = {
    context: DoCardType
};

export type HeroCardType = {
    nextSectionReference: any
};

export type RenderResumeSkillsType = {
    resumeConfigColumnOne: resumeConfigItemType[],
    resumeConfigColumnTwo: resumeConfigItemType[]
};

export type RenderSkillsInformationType = {
    title: string,
    percentage: number
};
