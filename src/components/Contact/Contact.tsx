import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ContactContainerBox } from "@components/components/Contact/Contact.css";

export const Contact = () => {
    return (
        <ContactContainerBox>
            {TextContainer('Contact', 'Get in Touch')}
        </ContactContainerBox>
    )
};