import {
    ResumeBackText,
    ResumeBox,
    ResumeContent,
    ResumeContentColumn,
    ResumeOverText,
    ResumeOverTextBorder,
    ResumeSimpleText,
    ResumeSkillBar,
    ResumeSkillProgress,
    ResumeSkills,
    ResumeSkillsInfo,
    ResumeTextContainer,
    Separator
} from "@components/components/Resume/Resume.css";
import { ContentCard } from "@components/components/ContentCard/ContentCard";
import { ResumeConfig } from "@components/utils/config";

export const Resume = () => {
    return (
        <ResumeBox>
            <ResumeTextContainer>
                <ResumeBackText>
                    Summary
                </ResumeBackText>
                <ResumeOverText>
                    Resume
                    <Separator />
                    <ResumeOverTextBorder />
                </ResumeOverText>
            </ResumeTextContainer>
            <ResumeContent>
                <ResumeContentColumn>
                    <ResumeSimpleText>
                        My Education
                    </ResumeSimpleText>
                    {ResumeConfig.education.map((item) => {
                        return (
                            <div key={item.title}>
                                <ContentCard context={item} />
                                <Separator paddingValue={1} />
                            </div>
                        )
                    })}
                </ResumeContentColumn>
                <ResumeContentColumn>
                    <ResumeSimpleText>
                        My Experience
                    </ResumeSimpleText>
                    {ResumeConfig.experience.map((item) => {
                        return (
                            <div key={item.title}>
                                <ContentCard context={item} />
                                <Separator paddingValue={1} />
                            </div>
                        )
                    })}
                </ResumeContentColumn>
            </ResumeContent>
            <ResumeTextContainer>
                <ResumeSimpleText>
                    My Skills
                </ResumeSimpleText>
            </ResumeTextContainer>
            <ResumeSkills>
                <ResumeContentColumn>
                    {ResumeConfig.my_skills.column_one.map((skill) => {
                        return (
                           <div key={skill.title}>
                               <ResumeSkillsInfo>
                                   <p>{skill.title}</p>
                                   <p>{skill.percentage}%</p>
                               </ResumeSkillsInfo>
                               <Separator paddingValue={0.7} />
                               <ResumeSkillBar>
                                   <ResumeSkillProgress progressPercentage={skill.percentage} />
                               </ResumeSkillBar>
                               <Separator paddingValue={0.7} />
                           </div>
                        )
                    })}
                </ResumeContentColumn>
                <ResumeContentColumn>
                    {ResumeConfig.my_skills.column_two.map((skill) => {
                        return (
                            <div key={skill.title}>
                                <ResumeSkillsInfo>
                                    <p>{skill.title}</p>
                                    <p>{skill.percentage}%</p>
                                </ResumeSkillsInfo>
                                <Separator paddingValue={0.7} />
                                <ResumeSkillBar>
                                    <ResumeSkillProgress progressPercentage={skill.percentage} />
                                </ResumeSkillBar>
                                <Separator paddingValue={0.7} />
                            </div>
                        )
                    })}
                </ResumeContentColumn>
            </ResumeSkills>
        </ResumeBox>
    )
};