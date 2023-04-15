import {
    ResumeBackText,
    ResumeBox, ResumeContent, ResumeContentColumn,
    ResumeOverText, ResumeOverTextBorder, ResumeSimpleText, ResumeSkillBar, ResumeSkillProgress, ResumeSkills,
    ResumeTextContainer, Separator
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
                    <p>Typescript</p>
                    <Separator paddingValue={0.5} />
                    <ResumeSkillBar>
                        <ResumeSkillProgress progressPercentage={50} />
                    </ResumeSkillBar>
                </ResumeContentColumn>
                <ResumeContentColumn>
                    <p>Typescript</p>
                    <Separator paddingValue={0.5} />
                    <ResumeSkillBar>
                        <ResumeSkillProgress progressPercentage={50} />
                    </ResumeSkillBar>
                </ResumeContentColumn>
            </ResumeSkills>
        </ResumeBox>
    )
};