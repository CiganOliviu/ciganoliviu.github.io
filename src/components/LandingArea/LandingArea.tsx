import {
    ExternalLink,
    LandingAreaBox,
    LandingAreaContainer,
    LandingAreaContinuityText, LandingAreaInlineTextWrapper, LandingAreaTextWrapper,
    LandingAreaTypeAnimationText,
    LandingAreaWelcomeText,
} from "@components/components/LandingArea/LandingArea.css";
import TypeWriter from 'typewriter-effect';
import { LandingAreaConfig } from "@components/configs/generalConfig";
import { FC } from "react";
import { Logo } from "@components/components/Logo/Logo";
import { useRouter } from "next/router";

export const LandingArea: FC = () => {
    const router = useRouter();

    const onExperienceClick = () => {
        router.push('/experience').then();
    };

    return (
        <LandingAreaBox>
            <Logo />
            <LandingAreaContainer>
                <LandingAreaWelcomeText>
                    {LandingAreaConfig.WelcomeText}
                </LandingAreaWelcomeText>
                <LandingAreaTypeAnimationText>
                    <LandingAreaTextWrapper>
                        I am{' '}
                        <LandingAreaInlineTextWrapper>
                            <TypeWriter
                                options={{
                                    strings: LandingAreaConfig.TypeWriterContext,
                                    autoStart: true,
                                    loop: true,
                                    delay: 90
                                }}
                            />
                        </LandingAreaInlineTextWrapper>
                    </LandingAreaTextWrapper>
                </LandingAreaTypeAnimationText>
                <LandingAreaContinuityText>
                    {LandingAreaConfig.ContinuityText}
                </LandingAreaContinuityText>
                <ExternalLink onClick={onExperienceClick} rel="nofollow">
                    {LandingAreaConfig.ButtonText}
                </ExternalLink>
            </LandingAreaContainer>
        </LandingAreaBox>
    )
}