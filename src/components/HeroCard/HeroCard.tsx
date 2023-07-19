import {
    GeneralButton,
    HeroCardBox,
    HeroCardContainer,
    HeroCardContinuityText,
    HeroCardTypeAnimationText,
    HeroCardWelcomeText,
} from "@components/components/HeroCard/HeroCard.css";
import TypeWriter from 'typewriter-effect';
import { HeroCardConfig } from "@components/utils/config";
import { FC } from "react";
import { HeroCardType } from "@components/utils/types";

export const HeroCard: FC<HeroCardType> = ({ nextSectionReference }) => {
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