import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { KnowMeMoreBox } from "@components/components/KnowMeMore/KnowMeMore.css";

export const KnowMeMore = () => {
    return (
        <KnowMeMoreBox>
            {TextContainer('About me', 'Know Me More')}
        </KnowMeMoreBox>
    )
}