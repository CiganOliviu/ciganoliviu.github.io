import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { PageWallpaper } from "@components/components/PageWallpaper/PageWallpaper";
import {
    DetailPageTypes,
    fetchResumeConfigObject,
    getDetailPageParams
} from "@components/utils/detailPageManipulations";
import { ContentOnlyWrapper } from "@components/utils/DetailPageStyles.css";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

const DetailPage = () => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();
    const { slugDetailPage } = router.query;
    const { pageType, identity, keySearchId } = getDetailPageParams(slugDetailPage as string);

    const [responseObject, setResponseObject] = useState<any>(undefined);

    useEffect(() => {
        if (pageType === DetailPageTypes.RESUME)
            setResponseObject(fetchResumeConfigObject(keySearchId, identity));
    }, [slugDetailPage]);

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
            <ContentOnlyWrapper dangerouslySetInnerHTML={responseObject.htmlField}/>
            <Footer />
        </>
    );
};

export default DetailPage;