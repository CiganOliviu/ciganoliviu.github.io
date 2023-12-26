import {
    GeneralLink,
    HeroCardBox,
    HeroCardContainer,
    HeroCardContinuityText,
    HeroCardTypeAnimationText,
    HeroCardWelcomeText,
} from "@components/components/HeroCard/HeroCard.css";
import TypeWriter from 'typewriter-effect';
import { HeroCardConfig } from "@components/configs/config";
import { FC } from "react";
import { HeroCardType } from "@components/utils/types";
import { Logo } from "@components/components/Logo/Logo";

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
                <GeneralLink onClick={scrollToRef} rel="nofollow">
                    {HeroCardConfig.ButtonText}
                </GeneralLink>
            </HeroCardContainer>
        </HeroCardBox>
    )
}