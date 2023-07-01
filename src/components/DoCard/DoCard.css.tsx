import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const DoCardFlex = styled.div`
    display: flex;
`

export const DoCardImageContainer = styled.div`
    background: ${AppTheme.darkerClose};
    height: 80%;
    width: 80%;
    text-align: center;
    border-radius: 1rem;
    padding: 1rem;
    
    ${minWidthQuery(Breakpoints.small)} {
        width: 8rem;
    }
  
    ${minWidthQuery(Breakpoints.medium)} {
        width: 20rem;
    }
  
    ${minWidthQuery(Breakpoints.large)} {
        width: 12.5rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        width: 8rem;
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

export const DoCardText = styled.p`
    line-height: 1.5rem;
`;