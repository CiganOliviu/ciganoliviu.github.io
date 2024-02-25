import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectsWrapper = styled.div`
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.white};
`;

export const ProjectsFlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    padding: 2rem;
  
    ${minWidthQuery(Breakpoints.medium)} {
        padding: 0;
        flex-direction: row;
    }
`;

export const ProjectColumn = styled.div`
    margin: 1.7rem .1rem;
    width: 100%;
    
    ${minWidthQuery(Breakpoints.medium)} {
        width: 30rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        width: 35rem;
        padding: 2rem;
    }
`;