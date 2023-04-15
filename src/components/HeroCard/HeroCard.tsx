import {
    HeroCardContactButton,
    HeroCardBox, HeroCardContinuityText,
    HeroCardContainer, HeroCardTypeAnimationText, HeroCardWelcomeText,
} from "@components/components/HeroCard/HeroCard.css";
import TypeWriter from 'typewriter-effect';
import { HeroCardConfig } from "@components/utils/config";

export const HeroCard = () => {
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
                <HeroCardContactButton>
                    {HeroCardConfig.ButtonText}
                </HeroCardContactButton>
            </HeroCardContainer>
        </HeroCardBox>
    )
}