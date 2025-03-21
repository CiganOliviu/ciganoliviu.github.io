import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { PageWallpaper } from "@components/components/PageWallpaper/PageWallpaper";
import {
    getDetailPageParams,
    getFetchWrapper
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
import { getStandardHeaderForPages } from "@components/pages";

const DetailPage = () => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();
    const { slugDetailPage } = router.query || {};
    const {
        pageType,
        identity,
        keySearchId
    } = getDetailPageParams(slugDetailPage as string);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [responseObject, setResponseObject] = useState<any>(undefined);

    useEffect(() => {
        if (slugDetailPage && keySearchId) {
            setIsLoading(true);

            const fetchProject = async (): Promise<void> => {
                const fetchWrapper = getFetchWrapper(pageType);
                const detailPageData = fetchWrapper(keySearchId, identity);

                setResponseObject(detailPageData);
                setIsLoading(false);
            };

            fetchProject().then(null);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slugDetailPage]);

    if (isLoading) {
        return null;
    }

    if (!responseObject) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <React.Fragment>
            {getStandardHeaderForPages("Cigan Oliviu David", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
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
                            Check the article on Medium
                        </SimpleExternalLink>
                    </ContentLinkWrapper>
                }
            </ContentOnlyWrapper>
            <Footer backgroundColor={AppTheme.darkerOpen} />
        </React.Fragment>
    );
};

export default DetailPage;