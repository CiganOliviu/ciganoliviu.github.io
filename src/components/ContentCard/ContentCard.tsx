import {
    ContentCardBox,
    ContentCardDate,
    ContentCardSubTitle,
    ContentCardText,
    ContentCardTitle
} from "@components/components/ContentCard/ContentCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { FC } from "react";
import { ContentCardContext } from "@components/utils/types";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

export const ContentCard: FC<ContentCardContext> = ({context}) => {
    const { isMobile } = useGetScreenSize();
    const isMobileResolution = isMobile();

    return (
        <ContentCardBox isMobile={isMobileResolution}>
            <ContentCardDate>{context.date}</ContentCardDate>
            <Separator paddingValue={0.6} />
            <ContentCardTitle>{context.title}</ContentCardTitle>
            <Separator paddingValue={0.6} />
            <ContentCardSubTitle>{context.subtitle}</ContentCardSubTitle>
            <Separator paddingValue={0.8} />
            <ContentCardText isMobile={isMobileResolution}>{context.content}</ContentCardText>
        </ContentCardBox>
    )
}