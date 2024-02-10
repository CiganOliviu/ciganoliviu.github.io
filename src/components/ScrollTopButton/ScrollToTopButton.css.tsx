import styled, { keyframes } from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const ScrollToTopButton = styled.button<{ isVisible: boolean }>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: ${AppTheme.scrollToTopColor};
    color: ${AppTheme.white};
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.4s;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};


  :hover {
        background-color: ${AppTheme.darkerOpen};
    }
`;

export const ScrollToTopIcon = styled.img`
    width: 50%;
    filter: invert(53%) sepia(91%) saturate(377%) hue-rotate(111deg) brightness(102%) contrast(88%);
`