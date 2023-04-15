import {
    ResumeSkillBar,
    ResumeSkillProgress,
    ResumeSkillsInfo,
    Separator
} from "@components/components/Resume/Resume.css";
import { FC } from "react";

type RenderSkillsInformationType = {
    title: string,
    percentage: number,
}

export const RenderSkillsInformation: FC<RenderSkillsInformationType> = ({ title, percentage }) => {
    return (
        <>
            <ResumeSkillsInfo>
                <p>{title}</p>
                <p>{percentage}%</p>
            </ResumeSkillsInfo>
            <Separator paddingValue={0.7} />
            <ResumeSkillBar>
                <ResumeSkillProgress progressPercentage={percentage} />
            </ResumeSkillBar>
            <Separator paddingValue={0.7} />
        </>
    )
}