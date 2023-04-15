import { TextContainer } from "@components/components/TextContainer/TextContainer";
import {
    HighLight, HighLightWhite,
    KnowMeMoreBox,
    KnowMeMoreInfoContainer,
    KnowMeMoreTable, KnowMeMoreTableHeader, KnowMeMoreTableHeaderBorder
} from "@components/components/KnowMeMore/KnowMeMore.css";
import { ContentColumn, SimpleText } from "@components/components/Resume/Resume.css";
import { ContentCardText } from "@components/components/ContentCard/ContentCard.css";
import { Separator } from "@components/components/TextContainer/TextContainer.css";
import { HeroCardContactButton } from "@components/components/HeroCard/HeroCard.css";
import { KnowMeMoreConfig } from "@components/utils/config";

export const KnowMeMore = () => {
    return (
        <KnowMeMoreBox>
            {TextContainer('About me', 'Know Me More')}
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

                        <HeroCardContactButton whiteText={true}>
                            Download CV
                        </HeroCardContactButton>
                    </KnowMeMoreTable>
                </ContentColumn>
            </KnowMeMoreInfoContainer>
        </KnowMeMoreBox>
    )
}