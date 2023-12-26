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
            <ContentOnlyWrapper>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit libero ac ex ultrices, a venenatis libero efficitur. Morbi id diam non nisi vestibulum ultrices. Integer vitae magna id neque interdum faucibus. Quisque tincidunt consequat tortor, eget ullamcorper ante mollis quis. Nulla facilisi. Vivamus a ex eget odio sodales laoreet. Etiam ac dui nec lacus condimentum cursus a in purus. Curabitur suscipit velit vitae lorem laoreet, vel aliquet elit tincidunt. Nulla facilisi. Maecenas eu felis urna. Nulla facilisi. In hac habitasse platea dictumst. Morbi feugiat, lectus at fermentum viverra, nulla risus venenatis lectus, sed ultrices lacus nisi sed purus. Quisque eleifend, arcu nec sollicitudin feugiat, lectus eros efficitur metus, in elementum dolor arcu non justo. Sed nec eros ac leo lacinia mattis. Etiam porta tincidunt libero, eget tempus elit scelerisque eu.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit libero ac ex ultrices, a venenatis libero efficitur. Morbi id diam non nisi vestibulum ultrices. Integer vitae magna id neque interdum faucibus. Quisque tincidunt consequat tortor, eget ullamcorper ante mollis quis. Nulla facilisi. Vivamus a ex eget odio sodales laoreet. Etiam ac dui nec lacus condimentum cursus a in purus. Curabitur suscipit velit vitae lorem laoreet, vel aliquet elit tincidunt. Nulla facilisi. Maecenas eu felis urna. Nulla facilisi. In hac habitasse platea dictumst. Morbi feugiat, lectus at fermentum viverra, nulla risus venenatis lectus, sed ultrices lacus nisi sed purus. Quisque eleifend, arcu nec sollicitudin feugiat, lectus eros efficitur metus, in elementum dolor arcu non justo. Sed nec eros ac leo lacinia mattis. Etiam porta tincidunt libero, eget tempus elit scelerisque eu.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit libero ac ex ultrices, a venenatis libero efficitur. Morbi id diam non nisi vestibulum ultrices. Integer vitae magna id neque interdum faucibus. Quisque tincidunt consequat tortor, eget ullamcorper ante mollis quis. Nulla facilisi. Vivamus a ex eget odio sodales laoreet. Etiam ac dui nec lacus condimentum cursus a in purus. Curabitur suscipit velit vitae lorem laoreet, vel aliquet elit tincidunt. Nulla facilisi. Maecenas eu felis urna. Nulla facilisi. In hac habitasse platea dictumst. Morbi feugiat, lectus at fermentum viverra, nulla risus venenatis lectus, sed ultrices lacus nisi sed purus. Quisque eleifend, arcu nec sollicitudin feugiat, lectus eros efficitur metus, in elementum dolor arcu non justo. Sed nec eros ac leo lacinia mattis. Etiam porta tincidunt libero, eget tempus elit scelerisque eu.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit libero ac ex ultrices, a venenatis libero efficitur. Morbi id diam non nisi vestibulum ultrices. Integer vitae magna id neque interdum faucibus. Quisque tincidunt consequat tortor, eget ullamcorper ante mollis quis. Nulla facilisi. Vivamus a ex eget odio sodales laoreet. Etiam ac dui nec lacus condimentum cursus a in purus. Curabitur suscipit velit vitae lorem laoreet, vel aliquet elit tincidunt. Nulla facilisi. Maecenas eu felis urna. Nulla facilisi. In hac habitasse platea dictumst. Morbi feugiat, lectus at fermentum viverra, nulla risus venenatis lectus, sed ultrices lacus nisi sed purus. Quisque eleifend, arcu nec sollicitudin feugiat, lectus eros efficitur metus, in elementum dolor arcu non justo. Sed nec eros ac leo lacinia mattis. Etiam porta tincidunt libero, eget tempus elit scelerisque eu.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit libero ac ex ultrices, a venenatis libero efficitur. Morbi id diam non nisi vestibulum ultrices. Integer vitae magna id neque interdum faucibus. Quisque tincidunt consequat tortor, eget ullamcorper ante mollis quis. Nulla facilisi. Vivamus a ex eget odio sodales laoreet. Etiam ac dui nec lacus condimentum cursus a in purus. Curabitur suscipit velit vitae lorem laoreet, vel aliquet elit tincidunt. Nulla facilisi. Maecenas eu felis urna. Nulla facilisi. In hac habitasse platea dictumst. Morbi feugiat, lectus at fermentum viverra, nulla risus venenatis lectus, sed ultrices lacus nisi sed purus. Quisque eleifend, arcu nec sollicitudin feugiat, lectus eros efficitur metus, in elementum dolor arcu non justo. Sed nec eros ac leo lacinia mattis. Etiam porta tincidunt libero, eget tempus elit scelerisque eu.</p>
            </ContentOnlyWrapper>
            <Footer />
        </>
    );
};

export default DetailPage;