import {
    HeroCardContactButton,
    HeroCardBox, HeroCardContinuityText,
    HeroCardContainer, HeroCardTypeAnimationText, HeroCardWelcomeText,
} from "@components/components/HeroCard/HeroCard.css";
import TypeWriter from 'typewriter-effect';

export const HeroCard = () => {
    return (
        <HeroCardBox>
            <HeroCardContainer>
                <HeroCardWelcomeText>
                    Welcome
                </HeroCardWelcomeText>
                <HeroCardTypeAnimationText>
                    <TypeWriter
                        options={{
                            strings: [
                                'I am Cigan Oliviu-David.',
                                'I am a Student.',
                                'I am a Software Engineer.',
                                'I am a Researcher.'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 90
                        }}
                    />
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