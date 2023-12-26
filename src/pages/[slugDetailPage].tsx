import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { PageWallpaper } from "@components/components/PageWallpaper/PageWallpaper";
import {
    DetailPageTypes,
    fetchResumeConfigObject,
    getDetailPageParams
} from "@components/utils/detailPageManipulations";

const DetailPage = () => {
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
            <h1>Detail Page for {keySearchId}</h1>
        </>
    );
};

export default DetailPage;