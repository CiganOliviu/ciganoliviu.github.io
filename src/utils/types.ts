type innerHtmlType = { __html: string | TrustedHTML };

export type ArticlesConfigType = {
    id: string;
    thumbnail: string,
    title: string,
    postDate: string;
    readDuration?: string;
    previewField: string,
    htmlField: innerHtmlType,
    open_link: string;
};

export type TextContainerType = {
    backText: string,
    overText: string
};

export type HeroCardConfigType = {
    WelcomeText: string;
    TypeWriterContext: string[];
};

export enum ArticleType {
    Software = "Software",
    DataScience = "DataScience",
    Values = "Values"
}
