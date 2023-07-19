import { ContentColumn, ResumeSkills } from "@components/components/Resume/Resume.css";
import { RenderSkillsInformation } from "@components/components/Resume/RenderSkillsInformation";
import { RenderResumeSkills, resumeConfigItemType } from "@components/utils/types";
import { FC } from "react";

export const renderResumeSkills: FC<RenderResumeSkills> = ({ resumeConfigColumnOne,
                                                               resumeConfigColumnTwo }) => {
    return (
        <ResumeSkills>
            <ContentColumn>
                {resumeConfigColumnOne.map((skill) => {
                    return (
                        <div key={skill.title}>
                            {RenderSkillsInformation(skill.title, skill.percentage)}
                        </div>
                    )
                })}
            </ContentColumn>
            <ContentColumn>
                {resumeConfigColumnTwo.map((skill) => {
                    return (
                        <div key={skill.title}>
                            {RenderSkillsInformation(skill.title, skill.percentage)}
                        </div>
                    )
                })}
            </ContentColumn>
        </ResumeSkills>
    )
}