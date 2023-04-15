import {
    ResumeContent,
    ResumeContentColumn,
    ResumeSimpleText,
    Separator
} from "@components/components/Resume/Resume.css";
import { ResumeConfig } from "@components/utils/config";
import { ContentCard } from "@components/components/ContentCard/ContentCard";

export const RenderResumeContent = () => {
    return (
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
    )
}