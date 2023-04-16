import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const DoCardFlex = styled.div`
    display: flex;
`

export const DoCardImageContainer = styled.div`
    background: ${AppTheme.darkerClose};
    height: 35%;
    width: 25%;
    text-align: center;
    border-radius: 1rem;
    padding: 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        height: 35%;
        width: 35%;
    }
  
    ${minWidthQuery(Breakpoints.large)} {
        height: 30%;
        width: 15%;
    }
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
    filter: invert(71%) sepia(16%) saturate(2855%) hue-rotate(109deg) brightness(94%) contrast(75%);

    ${minWidthQuery(Breakpoints.medium)} {
      width: 70%;
      height: 70%;
    }
`;

export const DoCardTextContent = styled.div`
    padding: 0 2rem 2rem 2rem;
`;

export const DoCardTextTitle = styled.h3``;

export const DoCardText = styled.p``;