import { TextContainer } from "@components/components/TextContainer/TextContainer";
import {
    ContactContainerBox,
    ContactContainerForm,
    ContactEssentialFlex, ContactForm, ContactFormErrorMessage,
    ContactFormInput,
    ContactFormText, ContactFormTextArea
} from "@components/components/Contact/Contact.css";
import { Separator, SimpleText } from "@components/components/Resume/Resume.css";
import { GeneralButton } from "@components/components/HeroCard/HeroCard.css";
import React, { useState } from "react";
import { isValidEmail } from "@components/utils/generalManipulations";
import { getFormEndpoint } from "@components/utils/config";

type ContactInfoType = {
    name: string,
    email: string,
    message: string
};

export const Contact = () => {
    const initialState = {
        name: '',
        email: '',
        message: '',
    };

    const [formValues, setFormValues] = useState<ContactInfoType>(initialState);
    const [formErrors, setFormErrors] = useState<ContactInfoType>(initialState);

    const nameValidation = (errors: ContactInfoType) => {
        if (formValues.name.trim() === '') {
            errors.name = 'Name is required';
        }
    };

    const emailValidation = (errors: ContactInfoType) => {
        if (formValues.email.trim() === '') {
            errors.email = 'Email is required';

        } else if (!isValidEmail(formValues.email.trim())) {
            errors.email = 'Invalid Email Format';
        }
    };

    const messageValidation = (errors: ContactInfoType) => {
        if (formValues.message.trim() === '') {
            errors.message = 'Message is required';
        }
    };

    const areAnyErrors = (errors: ContactInfoType) => {
        return errors.name !== '' || errors.email !== '' || errors.message !== '';
    };

    const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        const errors = initialState;

        nameValidation(errors);
        emailValidation(errors);
        messageValidation(errors);

        if (areAnyErrors(errors)) {
            setFormErrors(errors);
            return;
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    return (
        <ContactContainerBox onSubmit={handleSubmit}>
            {TextContainer('Contact', 'Get in Touch')}
            <SimpleText>Send me a note</SimpleText>
            <ContactContainerForm>
                <ContactForm action={getFormEndpoint} method={'POST'}>
                    <ContactEssentialFlex>
                        <ContactFormInput type={'text'}
                                          placeholder={'name'}
                                          name={'name'}
                                          onChange={handleInputChange}
                                          value={formValues.name}
                        />

                        <ContactFormInput type={'email'}
                                          placeholder={'email'}
                                          name={'email'}
                                          onChange={handleInputChange}
                                          value={formValues.email}
                        />
                    </ContactEssentialFlex>
                    <ContactFormText>
                        <ContactFormTextArea
                            placeholder={'message'}
                            rows={6} name={'message'}
                            onChange={handleInputChange}
                            value={formValues.message}
                        />
                        <Separator paddingValue={0.6} />
                        {formErrors.name && <ContactFormErrorMessage>{formErrors.name}</ContactFormErrorMessage>}
                        <Separator paddingValue={0.6} />
                        {formErrors.email && <ContactFormErrorMessage>{formErrors.email}</ContactFormErrorMessage>}
                        <Separator paddingValue={0.6} />
                        {formErrors.message && <ContactFormErrorMessage>{formErrors.message}</ContactFormErrorMessage>}
                        <GeneralButton type={'submit'} whiteText={true}>
                            Send message
                        </GeneralButton>
                    </ContactFormText>
                </ContactForm>
            </ContactContainerForm>
        </ContactContainerBox>
    )
};