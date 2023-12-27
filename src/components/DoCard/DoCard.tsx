import {
    DoCardFlex,
    DoCardImageContainer, DoCardText,
    DoCardTextContent, DoCardTextTitle,
    ImageContainer
} from "@components/components/DoCard/DoCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { DoCardType } from "@components/utils/types";
import { FC } from "react";

type DoCardContextType = {
    context: DoCardType
};

export const DoCard: FC<DoCardContextType> = ({ context }) => {
    return (
        <DoCardFlex>
            <DoCardImageContainer>
                <ImageContainer src={context.icon} alt={context.title} />
            </DoCardImageContainer>
            <DoCardTextContent>
                <DoCardTextTitle>{context.title}</DoCardTextTitle>
                <Separator />
                <DoCardText>{context.content}</DoCardText>
            </DoCardTextContent>
        </DoCardFlex>
    )
}