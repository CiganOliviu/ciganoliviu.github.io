import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { PageWallpaper } from "@components/components/PageWallpaper/PageWallpaper";
import { fetchResumeConfigObject, getDetailPageParams } from "@components/utils/detailPageManipulations";

const DetailPage = () => {
    const router = useRouter();
    const { slugDetailPage } = router.query;
    const { pageType, identity, keySearchId } = getDetailPageParams(slugDetailPage as string);

    const [responseObject, setResponseObject] = useState<any>(undefined);

    useEffect(() => {

        setResponseObject(fetchResumeConfigObject(keySearchId, identity));
    }, [slugDetailPage]);

    if (!responseObject) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <>
            <PageWallpaper url={responseObject?.logo as string} />
            <h1>Detail Page for {keySearchId}</h1>
        </>
    );
};

export default DetailPage;