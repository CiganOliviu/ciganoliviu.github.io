import { ResumeBox } from "@components/components/Resume/Resume.css";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { RenderResumeContent } from "@components/components/RenderResumeContent/RenderResumeContent";

export const Resume = () => {
    return (
        <ResumeBox>
            {TextContainer({backText: 'Summary', overText: 'Resume'})}
            {RenderResumeContent()}
        </ResumeBox>
    )
};