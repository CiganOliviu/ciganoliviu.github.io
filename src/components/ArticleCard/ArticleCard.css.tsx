import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ArticleCardWrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 1.7rem .1rem;
    border: .3rem solid ${AppTheme.openGray};
    box-sizing: border-box;
    border-radius: 1rem;
    background: ${AppTheme.darkCardBackground};
    flex-direction: column;
  
    ${minWidthQuery(Breakpoints.large)} {
        flex-direction: row;
        width: 80%;
    }
`;

export const ArticleCardContentWrapper = styled.div`
    text-align: center;
    padding: 1rem;

    ${minWidthQuery(Breakpoints.large)} {
        padding: 2rem;
    }
`;

export const ArticleCardThumbnail = styled.img`
    width: 100%;
    border-radius: 0.5rem;

    ${minWidthQuery(Breakpoints.large)} {
        width: 40%;
    }
`;

export const ArticleCardTitle = styled.h2`
    color: ${AppTheme.lightGreen};
    font-weight: bold;
    padding: 1rem;
`;

export const ArticleCardSubtitle = styled.h4`
    color: ${AppTheme.lightGreen};
    padding: 1rem;
`;

export const ArticleCardContent = styled.div`
    color: ${AppTheme.cardContentGray};
    text-indent: 1rem;
    line-height: 2rem;
    padding: 1rem;
    font-weight: bold;
    margin-left: 1rem;
`;
