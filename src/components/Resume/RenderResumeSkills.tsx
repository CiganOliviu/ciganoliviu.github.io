import { ResumeContentColumn, ResumeSkills } from "@components/components/Resume/Resume.css";
import { ResumeConfig } from "@components/utils/config";
import { RenderSkillsInformation } from "@components/components/Resume/RenderSkillsInformation";

export const renderResumeSkills = () => {
    return (
        <ResumeSkills>
            <ResumeContentColumn>
                {ResumeConfig.my_skills.column_one.map((skill) => {
                    return (
                        <div key={skill.title}>
                            {RenderSkillsInformation(skill.title, skill.percentage)}
                        </div>
                    )
                })}
            </ResumeContentColumn>
            <ResumeContentColumn>
                {ResumeConfig.my_skills.column_two.map((skill) => {
                    return (
                        <div key={skill.title}>
                            {RenderSkillsInformation(skill.title, skill.percentage)}
                        </div>
                    )
                })}
            </ResumeContentColumn>
        </ResumeSkills>
    )
}