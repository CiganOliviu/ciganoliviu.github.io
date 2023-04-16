import PenRulerSolid from '../../../src/assets/icons/pen-ruler-solid.svg';
import {
    DoCardFlex,
    DoCardImageContainer, DoCardText,
    DoCardTextContent, DoCardTextTitle,
    ImageContainer
} from "@components/components/DoCard/DoCard.css";
import { Separator } from "@components/components/Resume/Resume.css";

export const DoCard = (icon: string, title: string, content: string) => {
    return (
        <DoCardFlex>
            <DoCardImageContainer>
                <ImageContainer src={icon} alt={title} />
            </DoCardImageContainer>
            <DoCardTextContent>
                <DoCardTextTitle>{title}</DoCardTextTitle>
                <Separator />
                <DoCardText>{content}</DoCardText>
            </DoCardTextContent>
        </DoCardFlex>
    )
}