import {
    ContentCardBox,
    ContentCardDate,
    ContentCardFlexBox,
    ContentCardLogo,
    ContentCardSubTitle,
    ContentCardText,
    ContentCardTitle
} from "@components/components/ContentCard/ContentCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import React, { FC } from "react";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { InternalLink } from "@components/components/LandingArea/LandingArea.css";
import { EducationAndExperienceType } from "@components/utils/types";

type ContentCardContextType = {
    context: EducationAndExperienceType,
    resumePart: string
};

export const ContentCard: FC<ContentCardContextType> = ({ context, resumePart }) => {
    const { isMobile } = useGetScreenSize();
    const isMobileResolution = isMobile();

    return (
        <ContentCardBox isMobile={isMobileResolution}>
            <ContentCardFlexBox>
                <div>
                    <ContentCardDate>{context.date}</ContentCardDate>
                    <Separator paddingValue={0.6} />
                    <ContentCardTitle>{context.title}</ContentCardTitle>
                    <Separator paddingValue={0.6} />
                    <ContentCardSubTitle>{context.subtitle}</ContentCardSubTitle>
                </div>
                <ContentCardLogo src={context.logo} alt={context.logo} />
            </ContentCardFlexBox>
            <Separator paddingValue={0.8} />
            <ContentCardText isMobile={isMobileResolution} dangerouslySetInnerHTML={context.htmlField} />
            <Separator paddingValue={1} />
        </ContentCardBox>
    )
}