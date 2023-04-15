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
                        During my internship, I learned how an Agile team works. Besides this, I participated in building a basic VOD web application. My responsibilities included building new functionalities with ReactJS, HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding responsibilities, I was also assigned to research and work in the DevOps sector of the project. I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.
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