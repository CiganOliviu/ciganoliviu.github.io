import {
    ExternalLink,
    LandingAreaBox,
    LandingAreaContainer,
    LandingAreaContinuityText, LandingAreaInlineTextWrapper, LandingAreaTextWrapper,
    LandingAreaTypeAnimationText,
    LandingAreaWelcomeText,
} from "@components/components/LandingArea/LandingArea.css";
import TypeWriter from 'typewriter-effect';
import { HeroCardConfig } from "@components/configs/generalConfig";
import { FC } from "react";
import { Logo } from "@components/components/Logo/Logo";

type HeroCardType = {
    nextSectionReference: any
};

export const LandingArea: FC<HeroCardType> = ({ nextSectionReference }) => {
    const scrollToRef = () => {
        nextSectionReference?.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <LandingAreaBox>
            <Logo />
            <LandingAreaContainer>
                <LandingAreaWelcomeText>
                    {HeroCardConfig.WelcomeText}
                </LandingAreaWelcomeText>
                <LandingAreaTypeAnimationText>
                    <LandingAreaTextWrapper>
                        I am{' '}
                        <LandingAreaInlineTextWrapper>
                            <TypeWriter
                                options={{
                                    strings: HeroCardConfig.TypeWriterContext,
                                    autoStart: true,
                                    loop: true,
                                    delay: 90
                                }}
                            />
                        </LandingAreaInlineTextWrapper>
                    </LandingAreaTextWrapper>
                </LandingAreaTypeAnimationText>
                <LandingAreaContinuityText>
                    {HeroCardConfig.ContinuityText}
                </LandingAreaContinuityText>
                <ExternalLink onClick={scrollToRef} rel="nofollow">
                    {HeroCardConfig.ButtonText}
                </ExternalLink>
            </LandingAreaContainer>
        </LandingAreaBox>
    )
}