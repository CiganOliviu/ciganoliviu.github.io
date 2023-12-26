type ContentCardType = {
    date: string,
    title: string,
    logo: string,
    subtitle: string,
    previewHtmlField: { __html: string | TrustedHTML },
    htmlField: { __html: string | TrustedHTML },
};

export type ContentCardContext = {
    context: ContentCardType,
    resumePart: string
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

export type TextContainerType = {
    backText: string,
    overText: string
};
