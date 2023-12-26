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
    border-radius: 0.4rem;
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
    width: 3rem;
    height: 3rem;
    filter: invert(71%) sepia(16%) saturate(2855%) hue-rotate(109deg) brightness(94%) contrast(75%);

    ${minWidthQuery(Breakpoints.medium)} {
        width: 3rem;
        height: 3rem;
    }
`;

export const DoCardTextContent = styled.div`
    padding: 0 1rem 2rem 1.5rem;
    
    ${minWidthQuery(Breakpoints.medium)} {
        padding: 0 2rem 2rem 2rem;
    }
`;

export const DoCardTextTitle = styled.h3``;

export const DoCardText = styled.p`
    line-height: 1.5rem;
`;