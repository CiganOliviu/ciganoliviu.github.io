import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ContentCardBox = styled.div<{ isMobile?: boolean }>`
    background: ${AppTheme.darkCardBackground};
    border-radius: 1rem;
    padding: ${(props) => props.isMobile ? '1.5rem' : '2rem'};
`;

export const ContentCardFlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContentCardLogo = styled.img`
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
`;

export const ContentCardDate = styled.div`
    background: ${AppTheme.lightGreen};
    padding: 0.2rem;
    font-weight: bold;
    width: 80%;
    text-align: center;
    border-radius: 1rem;
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