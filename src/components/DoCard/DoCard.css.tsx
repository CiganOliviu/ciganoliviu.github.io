import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const DoCardFlex = styled.div`
    display: flex;
`

export const DoCardImageContainer = styled.div`
    background: ${AppTheme.darkerClose};
    height: 30%;
    width: 15%;
    text-align: center;
    border-radius: 1rem;
    padding: 1rem;
`;

export const ImageContainer = styled.img`
    width: 70%;
    height: 70%;
    filter: invert(71%) sepia(16%) saturate(2855%) hue-rotate(109deg) brightness(94%) contrast(75%);
`;

export const DoCardTextContent = styled.div`
    padding: 0 2rem 2rem 2rem;
`;

export const DoCardTextTitle = styled.h3``;

export const DoCardText = styled.p``;