import {
    DoCardFlex,
    DoCardImageContainer, DoCardText,
    DoCardTextContent, DoCardTextTitle,
    ImageContainer
} from "@components/components/DoCard/DoCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { DoCardContext } from "@components/utils/types";
import { FC } from "react";

export const DoCard: FC<DoCardContext> = ({ context }) => {
    return (
        <DoCardFlex>
            <DoCardImageContainer>
                <ImageContainer src={context.icon} alt={context.title} width={200} height={200} />
            </DoCardImageContainer>
            <DoCardTextContent>
                <DoCardTextTitle>{context.title}</DoCardTextTitle>
                <Separator />
                <DoCardText>{context.content}</DoCardText>
            </DoCardTextContent>
        </DoCardFlex>
    )
}