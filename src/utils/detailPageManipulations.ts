import { SoftwareArticlesConfig } from "@components/configs/softwareArticlesConfig";
import { ArticlesConfigType } from "@components/utils/types";
import { DiscreteJumpsArticlesConfig } from "@components/configs/discreteJumpsArticlesConfig";
import { ValuesArticlesConfig } from "@components/configs/valuesArticlesConfig";

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


export const fetchArticleConfigResponse = (keyTitle: string): ArticlesConfigType | undefined  => {
    const allArticles = SoftwareArticlesConfig.concat(DiscreteJumpsArticlesConfig).concat(ValuesArticlesConfig);
    return allArticles.find((obj) => obj.id === keyTitle);
};
