import { TextContainer } from "@components/components/TextContainer/TextContainer";
import {
    HighLight, HighLightWhite,
    KnowMeMoreBox,
    KnowMeMoreInfoContainer,
    KnowMeMoreTable, KnowMeMoreTableHeader, KnowMeMoreTableHeaderBorder
} from "@components/components/KnowMeMore/KnowMeMore.css";
import { ContentColumn, Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { ContentCardText } from "@components/components/ContentCard/ContentCard.css";
import { GeneralButton } from "@components/components/HeroCard/HeroCard.css";
import { KnowMeMoreConfig } from "@components/utils/config";
import { triggerDownloadCV } from "@components/utils/generalManipulations";
import { ForwardedRef, forwardRef } from "react";

export const KnowMeMore = forwardRef((props, ref: ForwardedRef<any>) => {
    return (
        <KnowMeMoreBox ref={ref}>
            {TextContainer('AboutMe', 'Know Me More')}
            <KnowMeMoreInfoContainer>
                <ContentColumn>
                    <SimpleText>
                        Hi, My name is <HighLight>Cigan Oliviu David</HighLight>, a Software Engineer
                    </SimpleText>
                    <ContentCardText>
                        {KnowMeMoreConfig.content}
                    </ContentCardText>
                </ContentColumn>
                <ContentColumn>
                    <KnowMeMoreTable>
                        <KnowMeMoreTableHeader>
                            <HighLightWhite>Name:</HighLightWhite> Cigan Oliviu David
                        </KnowMeMoreTableHeader>
                        <Separator />
                        <KnowMeMoreTableHeaderBorder />
                        <Separator paddingValue={1} />

                        <KnowMeMoreTableHeader>
                            <HighLightWhite>Email:</HighLightWhite> <HighLight>ciganoliviudavid@gmail.com</HighLight>
                        </KnowMeMoreTableHeader>
                        <Separator />
                        <KnowMeMoreTableHeaderBorder />
                        <Separator paddingValue={1} />

                        <KnowMeMoreTableHeader>
                            <HighLightWhite>Lives in:</HighLightWhite> Cluj-Napoca
                        </KnowMeMoreTableHeader>
                        <Separator />
                        <KnowMeMoreTableHeaderBorder />

                        <GeneralButton whiteText={true} onClick={triggerDownloadCV}>
                            Download CV
                        </GeneralButton>
                    </KnowMeMoreTable>
                </ContentColumn>
            </KnowMeMoreInfoContainer>
        </KnowMeMoreBox>
    )
});