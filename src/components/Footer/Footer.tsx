import { FooterContainerBox } from "@components/components/Footer/Footer.css";
import { HighLight } from "@components/components/KnowMeMore/KnowMeMore.css";
import { FC } from "react";
import { SocialLinks } from "@components/components/SocialLinks/SocialLinks";
import { Separator } from "@components/components/Resume/Resume.css";


export const Footer: FC = () => {
    return (
        <FooterContainerBox>
            <SocialLinks />
            <Separator paddingValue={1} />
            <p>Copyright © 2023 <HighLight>Cigan Oliviu</HighLight>. All Rights Reserved.</p>
        </FooterContainerBox>
    )
}