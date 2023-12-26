import { ContentColumn, ResumeContent, Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { ResumeConfig } from "@components/configs/config";
import { ContentCard } from "@components/components/ContentCard/ContentCard";

export const RenderResumeContent = () => {
    return (
        <ResumeContent>
            <ContentColumn>
                <SimpleText>
                    My Education
                </SimpleText>
                {ResumeConfig.education.map((item) => {
                    return (
                        <div key={item.title}>
                            <ContentCard context={item} />
                            <Separator paddingValue={1} />
                        </div>
                    )
                })}
            </ContentColumn>
            <ContentColumn>
                <SimpleText>
                    My Experience
                </SimpleText>
                {ResumeConfig.experience.map((item) => {
                    return (
                        <div key={item.title}>
                            <ContentCard context={item} />
                            <Separator paddingValue={1} />
                        </div>
                    )
                })}
            </ContentColumn>
        </ResumeContent>
    )
}