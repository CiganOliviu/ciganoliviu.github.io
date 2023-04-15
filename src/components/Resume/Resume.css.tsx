import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ResumeBox = styled.div`
    background: ${AppTheme.darkerClose};
`;

export const ResumeTextContainer = styled.div`
    text-align: center;
    position: relative;
`

export const ResumeBackText = styled.h1`
    color: ${AppTheme.openGray};
    text-align: center;
    font-size: 10rem;
    opacity: 0.2;
    z-index: 1;
    line-height: 20rem;
`;

export const ResumeOverText = styled.p`
    color: ${AppTheme.white};
    font-size: 2rem;
    font-weight: bold;
    position: absolute;
    top: 55%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
`;

export const Separator = styled.div<{ paddingValue?: number }>`
    padding: ${(props) => props.paddingValue || 0.3}rem;
`;

export const ResumeOverTextBorder = styled.div`
    background: ${AppTheme.lightGreen};
    width: 6%;
    height: 0.3rem;
    margin: 0 auto;
`;

export const ResumeContent = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

export const ResumeContentColumn = styled.div`
    padding: 2rem;
    width: 45%;
`

export const ResumeSimpleText = styled.h2`
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