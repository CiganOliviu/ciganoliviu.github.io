import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ContentOnlyWrapper = styled.div`
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.cardContentGray};
    font-weight: bold;
    padding: 2rem 2rem 3rem 2rem;
    line-height: 2rem;
    font-size: 1.1rem;
    
    ${minWidthQuery(Breakpoints.medium)} {
        padding: 2rem 15rem 3rem 15rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
      padding: 2rem 25rem 3rem 25rem;
    }
  
    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 2rem 30rem 3rem 30rem;
    }
`;

export const Content = styled.div``;

export const ContentLinkWrapper = styled.div<{ contentLinkBackground: string }>`
    background: ${(props) => props.contentLinkBackground};
    color: ${AppTheme.lightGreen};
    transition: all 250ms ease;
    font-weight: bold;
  
    :hover {
        color: ${AppTheme.white};
    }
`;

export const SimpleExternalLink = styled.a``;