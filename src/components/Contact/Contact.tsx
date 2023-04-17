import { TextContainer } from "@components/components/TextContainer/TextContainer";
import {
    ContactContainerBox,
    ContactContainerForm,
    ContactEssentialFlex,
    ContactFormInput,
    ContactFormText, ContactFormTextArea
} from "@components/components/Contact/Contact.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { HeroCardContactButton } from "@components/components/HeroCard/HeroCard.css";

export const Contact = () => {
    return (
        <ContactContainerBox>
            {TextContainer('Contact', 'Get in Touch')}
            <ContactContainerForm>
                <ContactEssentialFlex>
                    <ContactFormInput type={'text'} placeholder={'name'} />
                    <ContactFormInput type={'text'} placeholder={'email'} />
                </ContactEssentialFlex>
                <ContactFormText>
                    <ContactFormTextArea placeholder={'message'} rows={6} />
                    <Separator />
                    <HeroCardContactButton whiteText={true}>
                        Send message
                    </HeroCardContactButton>
                </ContactFormText>
            </ContactContainerForm>
        </ContactContainerBox>
    )
};