import {
    ResumeSkillBar,
    ResumeSkillProgress,
    ResumeSkillsInfo,
    Separator
} from "@components/components/Resume/Resume.css";

export const RenderSkillsInformation = (title: string, percentage: number) => {
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