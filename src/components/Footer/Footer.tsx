import { FooterContainerBox, HighLight, Separator } from "@components/components/Footer/Footer.css";
import { FC } from "react";

type FooterType = {
    backgroundColor: string,
};

export const Footer: FC<FooterType> = ({ backgroundColor }) => {
    return (
        <FooterContainerBox backgroundColor={backgroundColor}>
            <Separator paddingValue={1} />
            <p>Copyright © {new Date().getFullYear()} <HighLight>Cigan Oliviu-David</HighLight>. All Rights Reserved.</p>
        </FooterContainerBox>
    )
}