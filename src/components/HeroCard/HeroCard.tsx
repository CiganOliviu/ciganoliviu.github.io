import {
    ExternalLink,
    HeroCardBox,
    HeroCardContainer,
    HeroCardContinuityText,
    HeroCardTypeAnimationText,
    HeroCardWelcomeText,
} from "@components/components/HeroCard/HeroCard.css";
import TypeWriter from 'typewriter-effect';
import { HeroCardConfig } from "@components/configs/generalConfig";
import { FC } from "react";
import { Logo } from "@components/components/Logo/Logo";

type HeroCardType = {
    nextSectionReference: any
};

export const HeroCard: FC<HeroCardType> = ({ nextSectionReference }) => {
    const scrollToRef = () => {
        nextSectionReference?.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <HeroCardBox>
            <Logo />
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
                <ExternalLink onClick={scrollToRef} rel="nofollow">
                    {HeroCardConfig.ButtonText}
                </ExternalLink>
            </HeroCardContainer>
        </HeroCardBox>
    )
}