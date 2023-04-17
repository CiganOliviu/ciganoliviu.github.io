import { TextContainer } from "@components/components/TextContainer/TextContainer";
import {
    ContactContainerBox,
    ContactContainerForm,
    ContactEssentialFlex, ContactForm,
    ContactFormInput,
    ContactFormText, ContactFormTextArea
} from "@components/components/Contact/Contact.css";
import { Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { GeneralButton } from "@components/components/HeroCard/HeroCard.css";

export const Contact = () => {
    return (
        <ContactContainerBox>
            {TextContainer('Contact', 'Get in Touch')}
            <SimpleText>Send me a note</SimpleText>
            <ContactContainerForm>
                <ContactForm action={'https://getform.io/f/ba6e5e42-6797-47b3-956f-2059fcca4494'} method={'POST'}>
                    <ContactEssentialFlex>
                        <ContactFormInput type={'text'} placeholder={'name'} name={'name'} />
                        <ContactFormInput type={'email'} placeholder={'email'} name={'email'} />
                    </ContactEssentialFlex>
                    <ContactFormText>
                        <ContactFormTextArea placeholder={'message'} rows={6} name={'message'}/>
                        <Separator />
                        <GeneralButton type={'submit'} whiteText={true}>
                            Send message
                        </GeneralButton>
                    </ContactFormText>
                </ContactForm>
            </ContactContainerForm>
        </ContactContainerBox>
    )
};