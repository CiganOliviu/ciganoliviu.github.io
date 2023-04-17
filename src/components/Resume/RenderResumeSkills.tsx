import { ContentColumn, ResumeSkills } from "@components/components/Resume/Resume.css";
import { RenderSkillsInformation } from "@components/components/Resume/RenderSkillsInformation";
import { resumeConfigItemType } from "@components/utils/types";

export const renderResumeSkills = (resumeConfigColumnOne: resumeConfigItemType[],
                                   resumeConfigColumnTwo: resumeConfigItemType[]) => {
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