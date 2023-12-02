import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectsWrapper = styled.div`
    background: ${AppTheme.darkerOpen};
    color: ${AppTheme.white};
`;

export const ProjectsFlexWrapper = styled.div<{ isMobile: boolean }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    flex-direction: ${(props) => props.isMobile ? 'column' : 'row'};
`;

export const ProjectColumn = styled.div`
    margin: 1.7rem .1rem;
    border: .3rem solid ${AppTheme.openGray};
    box-sizing: border-box;
    border-radius: 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        flex-basis: calc(33% - 20px);
    }
  
`;