import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ContentOnlyWrapper = styled.div`
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.cardContentGray};
    font-weight: bold;
    min-height: 100vh;
    padding: 2rem 2rem 5rem 2rem;
    line-height: 2rem;
    font-size: 1rem;
    
    ${minWidthQuery(Breakpoints.medium)} {
        padding: 2rem 10rem 5rem 10rem;
    }
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 2rem 20rem 5rem 20rem;
    }
`;