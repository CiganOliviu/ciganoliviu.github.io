import { FooterContainerBox } from "@components/components/Footer/Footer.css";
import { HighLight } from "@components/components/KnowMeMore/KnowMeMore.css";
import { FC } from "react";
import { SocialLinks } from "@components/components/SocialLinks/SocialLinks";
import { Separator } from "@components/components/Resume/Resume.css";

type FooterType = {
    backgroundColor: string,
};

export const Footer: FC<FooterType> = ({ backgroundColor }) => {
    return (
        <FooterContainerBox backgroundColor={backgroundColor}>
            <SocialLinks />
            <Separator paddingValue={1} />
            <p>Copyright © {new Date().getFullYear()} <HighLight>Cigan Oliviu</HighLight>. All Rights Reserved.</p>
        </FooterContainerBox>
    )
}