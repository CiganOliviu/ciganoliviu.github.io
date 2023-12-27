import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ArticleCardWrapper = styled.div<{ responsiveScreen: boolean }>`
    display: flex;
    flex-direction: ${(props) => props.responsiveScreen ? 'column' : 'row'};
    width: ${(props) => props.responsiveScreen ? 100 : 80}%;
    margin: 1.7rem .1rem;
    border: .3rem solid ${AppTheme.openGray};
    box-sizing: border-box;
    border-radius: 1rem;
`;

export const ArticleCardContentWrapper = styled.div<{ responsiveScreen: boolean }>`
    text-align: center;
    padding: ${(props) => props.responsiveScreen ? 1 : 2}rem;
`;

export const ArticleCardThumbnail = styled.img<{ responsiveScreen: boolean }>`
    width: ${(props) => props.responsiveScreen ? 100 : 40}%;
    border-radius: 1rem;
`;

export const ArticleCardTitle = styled.h2`
    color: ${AppTheme.lightGreen};
    font-weight: bold;
`;

export const ArticleCardContent = styled.div`
    color: ${AppTheme.cardContentGray};
    text-indent: 1rem;
    line-height: 2rem;
    padding: 1rem;
    font-weight: bold;
    margin-left: 1rem;
`;
