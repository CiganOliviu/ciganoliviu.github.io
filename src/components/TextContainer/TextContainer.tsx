import { BackTextBox, OverTextBox, TextContainerBox } from "@components/components/TextContainer/TextContainer.css";
import { FC } from "react";
import { TextContainerType } from "@components/utils/types";

export const TextContainer: FC<TextContainerType> = ({backText, overText }) => {
    return (
        <>
            <TextContainerBox>
                <BackTextBox>
                    {backText}
                </BackTextBox>
                <OverTextBox>
                    {overText}
                </OverTextBox>
            </TextContainerBox>
        </>
    )
}