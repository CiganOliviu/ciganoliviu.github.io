import { FooterContainerBox } from "@components/components/Footer/Footer.css";
import { HighLight } from "@components/components/KnowMeMore/KnowMeMore.css";
import { FC } from "react";


export const Footer: FC = () => {
    return (
        <FooterContainerBox>
            <p>Copyright © 2023 <HighLight>Cigan Oliviu</HighLight>. All Rights Reserved.</p>
        </FooterContainerBox>
    )
}