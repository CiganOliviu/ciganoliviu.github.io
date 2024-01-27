type innerHtmlType = { __html: string | TrustedHTML };

export type ArticlesConfigType = {
    id: string;
    thumbnail: string,
    title: string,
    subtitle: string;
    previewHtmlField: innerHtmlType,
    htmlField: innerHtmlType,
    open_link: string;
};

export type ProjectConfigType = {
    id: string;
    thumbnail: string,
    title: string,
    subtitle: string,
    previewHtmlField: innerHtmlType,
    htmlField?: innerHtmlType,
    open_link: string,
    is_in_progress: boolean,
    is_research_paper: boolean,
};

export type DoCardType = {
    icon: string,
    title: string,
    content: string
};

export type TextContainerType = {
    backText: string,
    overText: string
};

export type LinkType = {
    url: string,
    iconSource: string
};

export type EducationAndExperienceType = {
    id: string;
    date: string;
    title: string;
    subtitle: string;
    thumbnail?: string;
    logo: string;
    hasDetailPage: boolean;
    previewHtmlField: innerHtmlType;
    htmlField: innerHtmlType,
};

export type ResumeConfigType = {
    education: EducationAndExperienceType[];
    experience: EducationAndExperienceType[];
};