import { ResumeBox, ResumeButtonContainer, Separator } from "@components/components/Resume/Resume.css";
import { RenderResumeContent } from "@components/components/Resume/RenderResumeContent";
import { renderResumeSkills } from "@components/components/Resume/RenderResumeSkills";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { GeneralButton } from "@components/components/HeroCard/HeroCard.css";
import { triggerDownloadCV } from "@components/utils/generalManipulations";

export const Resume = () => {
    return (
        <ResumeBox>
            {TextContainer('Summary', 'Resume')}
            {RenderResumeContent()}
            {renderResumeSkills()}
            <ResumeButtonContainer>
                <GeneralButton onClick={triggerDownloadCV}>
                    Download CV
                </GeneralButton>
            </ResumeButtonContainer>
            <Separator paddingValue={2} />
        </ResumeBox>
    )
};