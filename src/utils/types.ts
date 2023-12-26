type ContentCardType = {
    date: string,
    title: string,
    logo: string,
    subtitle: string,
    htmlField: { __html: string | TrustedHTML },
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

export type TextContainerType = {
    backText: string,
    overText: string
};
