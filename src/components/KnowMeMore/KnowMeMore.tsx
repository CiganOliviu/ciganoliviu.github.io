import { TextContainer } from "@components/components/TextContainer/TextContainer";
import {
    HighLight, HighLightWhite,
    KnowMeMoreBox,
    KnowMeMoreInfoContainer,
    KnowMeMoreTable, KnowMeMoreTableHeader, KnowMeMoreTableHeaderBorder
} from "@components/components/KnowMeMore/KnowMeMore.css";
import { ContentColumn, Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { ContentCardText } from "@components/components/ContentCard/ContentCard.css";
import { ExternalLink } from "@components/components/LandingArea/LandingArea.css";
import { KnowMeMoreConfig } from "@components/configs/generalConfig";
import { triggerDownloadCV } from "@components/utils/generalManipulations";
import React from "react";
import { SocialLinks } from "@components/components/SocialLinks/SocialLinks";

export const KnowMeMore = () => {
    return (
        <KnowMeMoreBox>
            {TextContainer({backText: 'AboutMe', overText: 'Know Me More'})}
            <KnowMeMoreInfoContainer>
                <ContentColumn>
                    <SimpleText>
                        More about <HighLight>what I did</HighLight> and <HighLight>who I am</HighLight>
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
                            <HighLightWhite>Lives in:</HighLightWhite> Cluj-Napoca, Satu-Mare
                        </KnowMeMoreTableHeader>
                        <Separator />
                        <KnowMeMoreTableHeaderBorder />

                        <Separator paddingValue={1} />
                        <SocialLinks />

                        <ExternalLink whiteText={true} onClick={triggerDownloadCV} rel="nofollow">
                            Download CV
                        </ExternalLink>
                    </KnowMeMoreTable>
                </ContentColumn>
            </KnowMeMoreInfoContainer>
        </KnowMeMoreBox>
    )
};