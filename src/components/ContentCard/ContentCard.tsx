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

export const ContentCard: FC<ContentCardContext> = ({context}) => {
    return (
        <ContentCardBox>
            <ContentCardDate>{context.date}</ContentCardDate>
            <Separator paddingValue={0.6} />
            <ContentCardTitle>{context.title}</ContentCardTitle>
            <Separator paddingValue={0.6} />
            <ContentCardSubTitle>{context.subtitle}</ContentCardSubTitle>
            <Separator paddingValue={0.8} />
            <ContentCardText>{context.content}</ContentCardText>
        </ContentCardBox>
    )
}