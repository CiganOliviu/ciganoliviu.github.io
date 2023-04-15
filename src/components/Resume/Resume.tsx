import {
    ResumeBackText,
    ResumeBox, ResumeContent, ResumeContentColumn,
    ResumeOverText, ResumeOverTextBorder, ResumeSimpleText,
    ResumeTextContainer, Separator
} from "@components/components/Resume/Resume.css";
import { ContentCard } from "@components/components/ContentCard/ContentCard";

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
                    <ContentCard />
                    <Separator paddingValue={1} />
                    <ContentCard />
                    <Separator paddingValue={1} />
                    <ContentCard />
                </ResumeContentColumn>
                <ResumeContentColumn>
                    <ResumeSimpleText>
                        My Experience
                    </ResumeSimpleText>
                    <ContentCard />
                    <Separator paddingValue={1} />
                    <ContentCard />
                    <Separator paddingValue={1} />
                    <ContentCard />
                </ResumeContentColumn>
            </ResumeContent>
        </ResumeBox>
    )
};