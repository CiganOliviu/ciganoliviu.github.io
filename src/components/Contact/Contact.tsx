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
import React, { useEffect, useState } from "react";
import { isValidEmail } from "@components/utils/generalManipulations";
import { getFormEndpoint } from "@components/utils/config";

export const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [canSubmitForm, setCanSubmitForm] = useState<boolean>(false);

    const isNameFieldValid = (): boolean => {
        return !(name.trim() === '');
    };

    const isEmailFieldValid = (): boolean => {
        return !(email.trim() === '' || !isValidEmail(email.trim()));
    };

    const isMessageFieldValid = () => {
        return !(message.trim() === '');
    };

    const handleInputNameChange = (event) => {
        setName(event.target.value);
    };

    const handleInputEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleInputMessageChange = (event) => {
        setMessage(event.target.value);
    };

    useEffect(() => {
        setCanSubmitForm(isNameFieldValid() && isEmailFieldValid() && isMessageFieldValid())
    }, [name, email, message]);

    return (
        <ContactContainerBox>
            {TextContainer('Contact', 'Get in Touch')}
            <SimpleText>Send me a note</SimpleText>
            <ContactContainerForm>
                <ContactForm action={getFormEndpoint} method={'POST'}>
                    <ContactEssentialFlex>
                        <ContactFormInput type={'text'}
                                          placeholder={'name'}
                                          name={'name'}
                                          onChange={handleInputNameChange}
                                          value={name}
                        />

                        <ContactFormInput type={'email'}
                                          placeholder={'email'}
                                          name={'email'}
                                          onChange={handleInputEmailChange}
                                          value={email}
                        />
                    </ContactEssentialFlex>
                    <ContactFormText>
                        <ContactFormTextArea
                            placeholder={'message'}
                            rows={6} name={'message'}
                            onChange={handleInputMessageChange}
                            value={message}
                        />
                        <Separator paddingValue={0.6} />

                        <GeneralButton type={'submit'} whiteText={true} disabled={!canSubmitForm}>
                            Send message
                        </GeneralButton>
                    </ContactFormText>
                </ContactForm>
            </ContactContainerForm>
        </ContactContainerBox>
    )
};