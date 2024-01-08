import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectsWrapper = styled.div`
    background: ${AppTheme.darkerOpen};
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
        width: 40%;
    }

    ${minWidthQuery(Breakpoints.large)} {
        width: 34%;
        padding: 2rem;
    }
`;