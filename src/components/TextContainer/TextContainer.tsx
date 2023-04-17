import {
    BackTextBox,
    OverTextBorder, OverTextBox,
    TextContainerBox
} from "@components/components/TextContainer/TextContainer.css";
import { Separator } from "@components/components/Resume/Resume.css";

export const TextContainer = (backText: string, overText: string) => {
    return (
        <>
            <TextContainerBox>
                <BackTextBox>
                    {backText}
                </BackTextBox>
                <OverTextBox>
                    {overText}
                    <Separator />
                    <OverTextBorder />
                </OverTextBox>
            </TextContainerBox>
        </>
    )
}