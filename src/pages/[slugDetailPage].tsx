import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

const DetailPage = () => {
    const router = useRouter();
    const { slugDetailPage } = router.query;

    if (slugDetailPage === 'xxx') {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <div>
            <h1>Detail Page for {slugDetailPage}</h1>
        </div>
    );
};

export default DetailPage;