import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";
import { SimpleText } from "@components/components/Resume/Resume.css";

export const ContactContainerBox = styled.div`
    background: ${AppTheme.darkerOpen};
    
    ${SimpleText} {
        padding: 0 0 0 3.5rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        ${SimpleText} {
            padding: 0 0 0 7rem;
        }
    }

    ${minWidthQuery(Breakpoints.large)} {
        ${SimpleText} {
          padding: 0 0 0 24rem;
        }
    }
`;

export const ContactContainerForm = styled.div`
    flex: 0.8;  
    text-align: center;
    padding: 0 1rem 1rem 1rem;
`;

export const ContactForm = styled.form``;

export const ContactEssentialFlex = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    flex-direction: column;
    
    ${minWidthQuery(Breakpoints.medium)} {
        flex-direction: row;
    }
`;

export const ContactFormText = styled.div`
    input {
      width: 84%;
    }
    
    ${minWidthQuery(Breakpoints.medium)} {
      input {
        width: 81%;
      }
    }

    ${minWidthQuery(Breakpoints.large)} {
        input {
          width: 52%;
        }
    }
`;

export const ContactFormInput = styled.input<{ isTextArea?: boolean }>`
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    margin: 0.5rem 0 0.5rem 0;
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.white};
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
  
    ${minWidthQuery(Breakpoints.medium)} {
        width: 40%;
        margin: 0 2rem 0 2rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        width: 25%;
    }
`;

export const ContactFormTextArea = styled.textarea`
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    margin: 0.5rem 0 0.5rem 0;
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.white};
    font-weight: bold;
    width: 85%;
    font-family: 'Ubuntu', sans-serif;
  
    ${minWidthQuery(Breakpoints.medium)} {
        width: 81%;
        margin: 0 2rem 0 2rem;
    }
    
    ${minWidthQuery(Breakpoints.large)} {
        width: 52%;
    }
`;

export const ContactFormErrorMessage = styled.div`
    color: red;
    font-weight: bold;
`
