import {
    ContentCardBox,
    ContentCardDate,
    ContentCardSubTitle, ContentCardText,
    ContentCardTitle
} from "@components/components/ContentCard/ContentCard.css";
import { Separator } from "@components/components/Resume/Resume.css";

export const ContentCard = () => {
    return (
        <ContentCardBox>
            <ContentCardDate>2005 - present</ContentCardDate>
            <Separator paddingValue={0.6} />
            <ContentCardTitle>Computer Science</ContentCardTitle>
            <Separator paddingValue={0.6} />
            <ContentCardSubTitle>Technical University of Cluj-Napoca</ContentCardSubTitle>
            <Separator paddingValue={0.8} />
            <ContentCardText>
                During my internship, I learned how an Agile team works. Besides this, I participated in building a
                basic VOD web application. My responsibilities included building new functionalities with ReactJS,
                HTML5/CSS3, and fixing bugs. I was also using Git and Gitlab with this project. Besides my coding
                responsibilities, I was also assigned to research and work in the DevOps sector of the project.
                I also learned what teamwork and leadership truly mean by offering my support and asking for help when needed.
            </ContentCardText>
        </ContentCardBox>
    )
}