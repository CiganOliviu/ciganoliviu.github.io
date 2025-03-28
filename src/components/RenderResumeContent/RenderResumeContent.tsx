import { ContentColumn, ResumeContent, Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { ContentCard } from "@components/components/ContentCard/ContentCard";
import { ResumeConfig } from "@components/configs/resumeConfig";
import { EducationAndExperienceType } from "@components/utils/types";
import React from "react";

export const RenderResumeContent = () => {
    return (
        <ResumeContent>
            <ContentColumn>
                <SimpleText>
                    My Education
                </SimpleText>
                {ResumeConfig.education.map((item: EducationAndExperienceType) => {
                    return (
                        <React.Fragment key={item.title}>
                            <ContentCard context={item} resumePart={'education'} />
                            <Separator paddingValue={1} />
                        </React.Fragment>
                    )
                })}
            </ContentColumn>
            <ContentColumn>
                <SimpleText>
                    My Experience
                </SimpleText>
                {ResumeConfig.experience.map((item: EducationAndExperienceType) => {
                    return (
                        <React.Fragment key={item.title}>
                            <ContentCard context={item} resumePart={'experience'} />
                            <Separator paddingValue={1} />
                        </React.Fragment>
                    )
                })}
            </ContentColumn>
        </ResumeContent>
    )
}