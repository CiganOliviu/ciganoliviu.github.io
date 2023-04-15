import { ResumeBox } from "@components/components/Resume/Resume.css";
import { RenderResumeContent } from "@components/components/Resume/RenderResumeContent";
import { RenderResumeTextContainer } from "@components/components/Resume/RenderResumeTextContainer";
import { renderResumeSkills } from "@components/components/Resume/RenderResumeSkills";

export const Resume = () => {
    return (
        <ResumeBox>
            {RenderResumeTextContainer()}
            {RenderResumeContent()}
            {renderResumeSkills()}
        </ResumeBox>
    )
};