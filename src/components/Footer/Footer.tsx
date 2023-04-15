import { FooterContainerBox } from "@components/components/Footer/Footer.css";
import { TextContainer } from "@components/components/TextContainer/TextContainer";

export const Footer = () => {
    return (
        <FooterContainerBox>
            {TextContainer('Footer', 'Footer')}
        </FooterContainerBox>
    )
}