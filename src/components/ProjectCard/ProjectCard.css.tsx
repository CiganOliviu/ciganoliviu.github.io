import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ProjectCardWrapper = styled.div`
    background: ${AppTheme.darkCardBackground};
    height: 100%;
    border: .3rem solid ${AppTheme.openGray};
    box-sizing: border-box;
    border-radius: 1rem;
`;

export const ProjectMarker = styled.div`
    background: ${AppTheme.lightGreen};
    color: ${AppTheme.white};
    position: absolute;
    padding: 0.3rem;
    font-weight: bold;
    border-radius: 0.6rem;
`;

export const ProjectCardThumbnail = styled.img`
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
    padding: 0 1rem 0 1rem;
`;

export const ProjectCardContent = styled.p`
    color: ${AppTheme.cardContentGray};
    text-indent: 1rem;
    line-height: 2rem;
    padding: .6rem;
    font-weight: bold;
`;
