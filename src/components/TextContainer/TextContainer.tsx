import {
    BackTextBox,
    OverTextBorder, OverTextBox,
    Separator,
    TextContainerBox
} from "@components/components/TextContainer/TextContainer.css";

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