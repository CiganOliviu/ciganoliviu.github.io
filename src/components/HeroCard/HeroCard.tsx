import {
    HeroCardContactButton,
    HeroCardBox, HeroCardContinuityText,
    HeroCardContainer, HeroCardTypeAnimationText, HeroCardWelcomeText,
} from "@components/components/HeroCard/HeroCard.css";

export const HeroCard = () => {
    return (
        <HeroCardBox>
            <HeroCardContainer>
                <HeroCardWelcomeText>
                    Welcome
                </HeroCardWelcomeText>
                <HeroCardTypeAnimationText>
                    I'm a programmer
                </HeroCardTypeAnimationText>
                <HeroCardContinuityText>
                    based in Cluj-Napoca, Romania.
                </HeroCardContinuityText>
                <HeroCardContactButton>
                    Let's discuss
                </HeroCardContactButton>
            </HeroCardContainer>
        </HeroCardBox>
    )
}