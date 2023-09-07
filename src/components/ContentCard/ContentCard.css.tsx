import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ContentCardBox = styled.div<{ isMobile?: boolean }>`
    background: ${AppTheme.darkCardBackground};
    border-radius: 1rem;
    padding: ${(props) => props.isMobile ? '1.5rem' : '2rem'};
`;

export const ContentCardDate = styled.div`
    background: ${AppTheme.lightGreen};
    padding: 0.2rem;
    font-weight: bold;
    width: 50%;
    text-align: center;
    border-radius: 1rem;
  
    ${minWidthQuery(Breakpoints.medium)} {
        width: 70%;
    }

    ${minWidthQuery(Breakpoints.large)} {
        width: 30%;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        width: 20%;
    }
`

export const ContentCardTitle = styled.h3``;

export const ContentCardSubTitle = styled.h4`
    color: ${AppTheme.lightGreen};
`;

export const ContentCardText = styled.div<{ isMobile?: boolean }>`
    color: ${AppTheme.cardContentGray};
    text-indent: 1rem;
    line-height: 1.8rem;
    font-weight: bold;
    text-align: ${(props) => props.isMobile ? 'center' : 'left'};
`