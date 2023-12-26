import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ResumeBox = styled.div`
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.white};
`;

export const Separator = styled.div<{ paddingValue?: number }>`
    padding: ${(props) => props.paddingValue || 0.3}rem;
`;

export const ResumeContent = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  
    ${minWidthQuery(Breakpoints.medium)} {
        flex-direction: row;
    }
`

export const ContentColumn = styled.div`
    padding: 2rem;
    width: 100%;

    ${minWidthQuery(Breakpoints.medium)} {
        width: 45%;
    }
`

export const SimpleText = styled.h2`
    text-align: center;
    padding-bottom: 2rem;
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 0 0 2rem 2rem;
    }
`;
