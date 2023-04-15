import { ResumeBox } from "@components/components/Resume/Resume.css";
import { RenderResumeContent } from "@components/components/Resume/RenderResumeContent";
import { renderResumeSkills } from "@components/components/Resume/RenderResumeSkills";
import { TextContainer } from "@components/components/TextContainer/TextContainer";

export const Resume = () => {
    return (
        <ResumeBox>
            {TextContainer('Summary', 'Resume')}
            {RenderResumeContent()}
            {renderResumeSkills()}
        </ResumeBox>
    )
};