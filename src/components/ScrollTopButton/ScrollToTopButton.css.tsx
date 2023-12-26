import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";
import Image from "next/image";

export const ScrollToTopButton = styled.button`
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
  
    :hover {
        background-color: ${AppTheme.darkerOpen};
    }
`;

export const ScrollToTopIcon = styled(Image)`
    width: 50%;
    filter: invert(53%) sepia(91%) saturate(377%) hue-rotate(111deg) brightness(102%) contrast(88%);
`