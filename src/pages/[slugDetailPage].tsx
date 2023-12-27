import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { PageWallpaper } from "@components/components/PageWallpaper/PageWallpaper";
import {
    DetailPageTypes, fetchProjectConfigResponse,
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

const DetailPage = () => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();
    const { slugDetailPage } = router.query || {};
    const { pageType, identity, keySearchId } = getDetailPageParams(slugDetailPage as string);

    const [responseObject, setResponseObject] = useState<any>(undefined);

    useEffect(() => {
        if (pageType === DetailPageTypes.RESUME)
            setResponseObject(fetchResumeConfigObject(keySearchId, identity));
        else if (pageType === DetailPageTypes.PROJECT)
            setResponseObject(fetchProjectConfigResponse(keySearchId));
    }, [pageType, keySearchId, identity]);

    if (!slugDetailPage || !responseObject) {
        // Render a loading state or handle the absence of slugDetailPage
        return <div>Loading...</div>;
    }

    if (!responseObject) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <>
            <PageWallpaper url={responseObject?.thumbnail as string}
                           title={responseObject?.title}
                           subtitle={responseObject?.subtitle}
            />
            {!isMobile() && <ScrollTopButton />}
            <ContentOnlyWrapper>
                <Content dangerouslySetInnerHTML={responseObject.htmlField} />
                <Separator paddingValue={2} />
                {responseObject?.open_link &&
                    <ContentLinkWrapper contentLinkBackground={AppTheme.darkerClose}>
                        <SimpleExternalLink href={responseObject?.open_link}>See the code and documentation on github</SimpleExternalLink>
                    </ContentLinkWrapper>
                }
            </ContentOnlyWrapper>
            <Footer backgroundColor={AppTheme.darkerOpen} />
        </>
    );
};

export default DetailPage;