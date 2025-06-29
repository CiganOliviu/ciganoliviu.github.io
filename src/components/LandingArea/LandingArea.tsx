import {
    LandingAreaBox,
    LandingAreaContainer,
    LandingAreaInlineTextWrapper,
    LandingAreaTextWrapper,
    LandingAreaTypeAnimationText,
    LandingAreaWelcomeText,
} from "@components/components/LandingArea/LandingArea.css";
import TypeWriter from 'typewriter-effect';
import { FC } from "react";
import { useRouter } from "next/router";
import { HeroCardConfigType } from "@components/utils/types";

export const LandingAreaConfig: HeroCardConfigType = {
    WelcomeText: 'Welcome',
    TypeWriterContext: [
        '',
        'Data Science.',
        'Software Engineering.',
        'Research.',
        'Finance.',
        'Values.'
    ],
};

export const LandingArea: FC = () => {
    const router = useRouter();

    const onExperienceClick = () => {
        router.push('/experience').then();
    };

    return (
        <LandingAreaBox>
            <LandingAreaContainer>
                <LandingAreaWelcomeText>
                    {LandingAreaConfig.WelcomeText}
                </LandingAreaWelcomeText>
                <LandingAreaTypeAnimationText>
                    <LandingAreaTextWrapper>
                        read about{' '}
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
            </LandingAreaContainer>
        </LandingAreaBox>
    )
}