import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { PageWallpaper } from "@components/components/PageWallpaper/PageWallpaper";
import {
    DetailPageTypes, fetchArticleConfigResponse,
    fetchProjectConfigResponse,
    fetchResumeConfigObject,
    getDetailPageParams
} from "@components/utils/detailPageManipulations";
import {
    Content,
    ContentLinkWrapper,
    ContentOnlyWrapper,
    SimpleExternalLink
} from "@components/utils/DetailPageStyles.css";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { Separator } from "@components/components/Resume/Resume.css";
import { AppTheme } from "@components/utils/cssMedia";
import Head from "next/head";

const DetailPage = () => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();
    const { slugDetailPage } = router.query || {};
    const {
        pageType,
        identity,
        keySearchId
    } = getDetailPageParams(slugDetailPage as string);

    const [responseObject, setResponseObject] = useState<any>(undefined);

    useEffect(() => {
        if (pageType === DetailPageTypes.RESUME)
            setResponseObject(fetchResumeConfigObject(keySearchId, identity));
        else if (pageType === DetailPageTypes.PROJECT)
            setResponseObject(fetchProjectConfigResponse(keySearchId));
        else if (pageType === DetailPageTypes.ARTICLE)
            setResponseObject(fetchArticleConfigResponse(keySearchId));
    }, [pageType, keySearchId, identity]);

    if (!slugDetailPage) {
        return <React.Fragment></React.Fragment>;
    }

    if (!responseObject) {
        console.log(responseObject);
        return <ErrorPage statusCode={404} />;
    }

    return (
        <React.Fragment>
            <Head>
                <title>{responseObject?.title}</title>
            </Head>
            <PageWallpaper url={responseObject?.thumbnail as string}
                           title={responseObject?.title}
                           subtitle={responseObject?.subtitle}
            />
            {!isMobile() && <ScrollTopButton />}
            <ContentOnlyWrapper>
                <Content dangerouslySetInnerHTML={responseObject.htmlField} />
                {responseObject?.open_link &&
                    <ContentLinkWrapper contentLinkBackground={AppTheme.darkerClose}>
                        <Separator paddingValue={1} />
                        <SimpleExternalLink href={responseObject?.open_link}>
                            {pageType === DetailPageTypes.PROJECT ? 'See the code and documentation on github' : 'Check the article on Medium'}
                        </SimpleExternalLink>
                    </ContentLinkWrapper>
                }
            </ContentOnlyWrapper>
            <Footer backgroundColor={AppTheme.darkerOpen} />
        </React.Fragment>
    );
};

export default DetailPage;