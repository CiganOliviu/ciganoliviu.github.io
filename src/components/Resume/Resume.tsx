import { ResumeBox, ResumeButtonContainer, Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { RenderResumeSkills } from "@components/components/RenderResumeSkills/RenderResumeSkills";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { GeneralLink } from "@components/components/HeroCard/HeroCard.css";
import { triggerDownloadCV } from "@components/utils/generalManipulations";
import { ResumeConfig } from "@components/utils/config";
import { RenderResumeContent } from "@components/components/RenderResumeContent/RenderResumeContent";

export const Resume = () => {
    return (
        <ResumeBox>
            {TextContainer({backText: 'Summary', overText: 'Resume'})}
            {RenderResumeContent()}
            <SimpleText>
                Domain Specific
            </SimpleText>
            {RenderResumeSkills({resumeConfigColumnOne: ResumeConfig.my_skills.column_one_domain,
                resumeConfigColumnTwo: ResumeConfig.my_skills.column_two_domain})}
            <Separator paddingValue={2} />
            <SimpleText>
                Technologies Specific
            </SimpleText>
            {RenderResumeSkills({resumeConfigColumnOne: ResumeConfig.my_skills.column_one_specific,
                resumeConfigColumnTwo: ResumeConfig.my_skills.column_two_specific})}
            <ResumeButtonContainer>
                <GeneralLink onClick={triggerDownloadCV}>
                    Download CV
                </GeneralLink>
            </ResumeButtonContainer>
            <Separator paddingValue={2} />
        </ResumeBox>
    )
};