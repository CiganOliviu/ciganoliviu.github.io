import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ResumeBox = styled.div`
    background: ${AppTheme.darkerClose};
`;

export const Separator = styled.div<{ paddingValue?: number }>`
    padding: ${(props) => props.paddingValue || 0.3}rem;
`;

export const ResumeContent = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const ContentColumn = styled.div`
    padding: 2rem;
    width: 45%;
`

export const SimpleText = styled.h2`
    padding: 1rem 0 2rem 2rem;
`;

export const ResumeSkills = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const ResumeSkillBar = styled.div`
    width: 100%;
    background: ${AppTheme.darkCardBackground};
    border-radius: 10rem;
    height: 0.7rem;
`;

export const ResumeSkillProgress = styled.div<{ progressPercentage: number }>`
    width: ${(props) => props.progressPercentage}%;
    background: ${AppTheme.lightGreen};
    border-radius: 10rem;
    height: 0.7rem;
`

export const ResumeSkillsInfo = styled.div`
    display: flex;
    font-weight: bold;
    justify-content: space-between;
`;