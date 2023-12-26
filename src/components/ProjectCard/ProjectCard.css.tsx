import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";
import Image from "next/image";

export const ProjectCardWrapper = styled.div`
    background: ${AppTheme.darkerClose};
    border-radius: 0.6rem;
    height: 100%;
`;

export const ProjectMarker = styled.div`
    background: ${AppTheme.lightGreen};
    color: ${AppTheme.white};
    position: absolute;
    padding: 0.3rem;
    font-weight: bold;
    border-radius: 0.6rem;
`;

export const ProjectCardThumbnail = styled(Image)`
    width: 100%;
    border-radius: 0.6rem;
    height: 15rem;
`;

export const ProjectCardMetadataWrapper = styled.div`
    text-align: center;
`;

export const ProjectCardTitle = styled.h2`
    color: ${AppTheme.lightGreen};
    font-weight: bold;
`;

export const ProjectCardContent = styled.p`
    color: ${AppTheme.cardContentGray};
    text-indent: 1rem;
    line-height: 2rem;
    padding: .6rem;
    font-weight: bold;
`;
