import {
    ResumeBackText,
    ResumeOverText, ResumeOverTextBorder, ResumeSimpleText,
    ResumeTextContainer,
    Separator
} from "@components/components/Resume/Resume.css";

export const RenderResumeTextContainer = () => {
    return (
        <>
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

            <ResumeTextContainer>
                <ResumeSimpleText>
                    My Skills
                </ResumeSimpleText>
            </ResumeTextContainer>
        </>
    )
}