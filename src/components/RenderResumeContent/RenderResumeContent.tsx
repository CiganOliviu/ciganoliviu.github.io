import { ContentColumn, ResumeContent, Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { ContentCard } from "@components/components/ContentCard/ContentCard";
import { ResumeConfig } from "@components/configs/resumeConfig";
import { ContentCardType } from "@components/utils/types";

export const RenderResumeContent = () => {
    return (
        <ResumeContent>
            <ContentColumn>
                <SimpleText>
                    My Education
                </SimpleText>
                {ResumeConfig.education.map((item: ContentCardType) => {
                    return (
                        <div key={item.title}>
                            <ContentCard context={item} resumePart={'education'} />
                            <Separator paddingValue={1} />
                        </div>
                    )
                })}
            </ContentColumn>
            <ContentColumn>
                <SimpleText>
                    My Experience
                </SimpleText>
                {ResumeConfig.experience.map((item: ContentCardType) => {
                    return (
                        <div key={item.title}>
                            <ContentCard context={item} resumePart={'experience'} />
                            <Separator paddingValue={1} />
                        </div>
                    )
                })}
            </ContentColumn>
        </ResumeContent>
    )
}