import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ProjectsWrapper = styled.div`
    background: ${AppTheme.darkerOpen};
`;

export const ProjectsFlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
`;

export const ProjectColumn = styled.div`
    flex-basis: calc(33.33% - 20px); 
    margin: 1.7rem .1rem;
    padding: .1rem;
    border: .3rem solid ${AppTheme.openGray};
    box-sizing: border-box;
    border-radius: 1rem;
`;