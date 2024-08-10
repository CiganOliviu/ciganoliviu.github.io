import { ArticlesConfigType } from "@components/utils/types";
import SystemicCluster from "@components/assets/articles/the_systemic_cluster.jpg";

export const DiscreteJumpsArticlesConfig: ArticlesConfigType[] = [
    {
        id: 'the-systemic-cluster',
        thumbnail: SystemicCluster.src,
        title: 'The Systemic Cluster: An Analysis of S&P 500 Performance Over 24 Years Using K-means Clustering',
        subtitle: '11 April 2024',
        previewField: 'This paper presents an empirical study of the S&P 500\'s performance over a period of 24 years, utilizing a novel approach termed "The Systemic Cluster." It diverges from traditional market analysis methods by employing annualized returns and percentile scoring in conjunction with K-means clustering to elucidate systemic patterns in stock market performance.',
        htmlField: {
            __html: 'This paper presents an empirical study of the S&P 500\'s performance over a period of 24 years, utilizing a novel approach termed "The Systemic Cluster." It diverges from traditional market analysis methods by employing annualized returns and percentile scoring in conjunction with K-means clustering to elucidate systemic patterns in stock market performance. The study\'s findings reveal a consistent positive drift for stocks with higher relative percentile scores, suggesting an inherent market tendency to reward winners. Additionally, the occurrence of occasional spurts in the highest decile indicates the presence of market extremities. The implications of these findings are discussed in relation to their predictive capacity for macro market trends and investment strategies.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Introduction</h1>' +
                'The stock market has always been a subject of intense study, with various models and theories proposed to explain and predict its behavior. Conventional clustering methods in financial markets have often relied on company-specific variables that tend to be idiosyncratic. This study introduces "The Systemic Cluster" approach, which analyzes broader market trends using a data-driven methodology that shifts focus from idiosyncratic variables to systemic patterns.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Literature Review</h1>' +
                '<div>&nbsp;</div>' +
                'Previous literature has extensively covered the use of clustering techniques in stock market analysis. Clustering allows for the categorization of stocks based on various financial metrics. However, most studies focus on idiosyncratic variables, which, while useful, are susceptible to the "Predictive Curse." As explained by Campbell and Goodhart. The current study builds on the literature by incorporating a systemic perspective, providing a novel view of market analysis.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Data and Methodology</h1>' +
                '<div>&nbsp;</div>' +
                'The dataset comprises annualized returns and relative percentile rankings of S&P 500 stocks from 2000 to 2023. The K-means clustering algorithm was employed to identify clusters within the data. This approach enables the examination of stock performances as a function of their systemic characteristics rather than individual attributes.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Empirical Findings</h1>' +
                '<div>&nbsp;</div>' +
                'The analysis yielded several key findings. Firstly, a consistent positive drift was observed across all years, indicating that stocks with higher relative percentile scores tended to perform better. There was a winner’s bias for each year. Secondly, the highest decile showed sporadic upward movements, signifying instances of extreme market returns. These patterns were consistent across diverse market conditions, including periods of recession, recovery, and growth.' +
                '<div>&nbsp;</div>' +
                '<h1 style="line-height: 3rem">Conclusion</h1>' +
                '<div>&nbsp;</div>' +
                '"The Systemic Cluster" presents a new perspective in stock market analysis, highlighting the utility of systemic scoring in understanding market behavior. The approach offers a predictive capacity for macro market trends, aiding investors in navigating the complexities of the financial markets.' +
                '<div>&nbsp;</div>' +
                'Join the Future of Investing:' +
                '<div>&nbsp;</div>' +
                'By choosing AlphaBlock, you\'re not just embracing innovative wealth generation; you\'re also embracing responsible and sustainable practices. Together, we can forge a brighter financial future for both you and the planet. Take the next step in your investment journey—contact AlphaBlock today and become a part of the revolution. Unlock alpha. Embrace the future. Choose AlphaBlock.\n'
        },
        open_link: '',
    },
];

export const DiscreteJumpsArticlesConfigPreview = DiscreteJumpsArticlesConfig.slice(0, 3);