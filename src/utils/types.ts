type innerHtmlType = { __html: string | TrustedHTML };

export type ContentCardType = {
    date: string,
    title: string,
    logo: string,
    subtitle: string,
    hasDetailPage: boolean,
    previewHtmlField: innerHtmlType,
    htmlField: innerHtmlType,
};

export type ArticlesConfigType = {
    thumbnail: string,
    title: string,
    subtitle: string;
    previewHtmlField: innerHtmlType,
    htmlField: innerHtmlType,
    open_link: string;
};

export type ProjectConfigType = {
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