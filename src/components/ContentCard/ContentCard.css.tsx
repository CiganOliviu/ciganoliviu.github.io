import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ContentCardBox = styled.div`
    background: ${AppTheme.darkCardBackground};
    padding: 2rem;
    border-radius: 1rem;
`;

export const ContentCardDate = styled.div`
    background: ${AppTheme.lightGreen};
    padding: 0.2rem;
    font-weight: bold;
    width: 25%;
    text-align: center;
`

export const ContentCardTitle = styled.h3``;

export const ContentCardSubTitle = styled.h4`
    color: ${AppTheme.lightGreen};
`;

export const ContentCardText = styled.p`
    color: ${AppTheme.cardContentGray};
    text-indent: 1rem;
    line-height: 1.8rem;
    font-weight: bold;
`