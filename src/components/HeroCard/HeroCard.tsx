import {
    GeneralButton,
    HeroCardBox, HeroCardContinuityText,
    HeroCardContainer, HeroCardTypeAnimationText, HeroCardWelcomeText,
} from "@components/components/HeroCard/HeroCard.css";
import TypeWriter from 'typewriter-effect';
import { HeroCardConfig } from "@components/utils/config";

export const HeroCard = ({ nextSectionReference }) => {
    const scrollToRef = () => {
        nextSectionReference?.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <HeroCardBox>
            <HeroCardContainer>
                <HeroCardWelcomeText>
                    {HeroCardConfig.WelcomeText}
                </HeroCardWelcomeText>
                <HeroCardTypeAnimationText>
                    <TypeWriter
                        options={{
                            strings: HeroCardConfig.TypeWriterContext,
                            autoStart: true,
                            loop: true,
                            delay: 90
                        }}
                    />
                </HeroCardTypeAnimationText>
                <HeroCardContinuityText>
                    {HeroCardConfig.ContinuityText}
                </HeroCardContinuityText>
                <GeneralButton onClick={scrollToRef}>
                    {HeroCardConfig.ButtonText}
                </GeneralButton>
            </HeroCardContainer>
        </HeroCardBox>
    )
}