import { ContentColumn, ResumeSkills } from "@components/components/Resume/Resume.css";
import { RenderSkillsInformation } from "@components/components/RenderSkillsInformation/RenderSkillsInformation";
import { RenderResumeSkillsType } from "@components/utils/types";
import { FC } from "react";

export const renderResumeSkills: FC<RenderResumeSkillsType> = ({ resumeConfigColumnOne,
                                                               resumeConfigColumnTwo }) => {
    return (
        <ResumeSkills>
            <ContentColumn>
                {resumeConfigColumnOne.map((skill) => {
                    return (
                        <div key={skill.title}>
                            {RenderSkillsInformation({title: skill.title, percentage: skill.percentage})}
                        </div>
                    )
                })}
            </ContentColumn>
            <ContentColumn>
                {resumeConfigColumnTwo.map((skill) => {
                    return (
                        <div key={skill.title}>
                            {RenderSkillsInformation({title: skill.title, percentage: skill.percentage})}
                        </div>
                    )
                })}
            </ContentColumn>
        </ResumeSkills>
    )
}