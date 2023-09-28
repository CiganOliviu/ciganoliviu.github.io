import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ProjectCardWrapper = styled.div`
    background: ${AppTheme.darkerClose};
    border-radius: 0.6rem;
`;

export const ProjectCardThumbnail = styled.img`
    width: 100%;
    border-radius: 0.6rem;
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
    font-weight: bold;
`;
