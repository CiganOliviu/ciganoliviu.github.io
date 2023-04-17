import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";
import HeroCardWallpaper from '../../assets/HeroCard.jpg';

export const HeroCardBox = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HeroCardWallpaper.src}) 
    center;
    background-size: cover;
    position: relative;
    height: 100vh;
`;

export const HeroCardContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${AppTheme.white};
    text-align: center;
`;

export const HeroCardWelcomeText = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
`;

export const HeroCardTypeAnimationText = styled.div`
    margin-top: 2rem;
    font-size: 4rem;
    font-weight: bold;
`

export const HeroCardContinuityText = styled.div`
    margin-top: 2rem;  
    font-size: 1.3rem;
    font-weight: bold;
`;

export const GeneralButton = styled.button<{ whiteText?: boolean }>`
    color: ${(props) => props.whiteText ? AppTheme.white : AppTheme.lightGreen};
    background: transparent;
    border: solid ${AppTheme.lightGreen};
    border-radius: 2rem;
    padding: 0.8rem 1.8rem 0.8rem 1.8rem; 
    text-align: center; 
    text-decoration: none;
    display: inline-block;
    font-size: 1.1rem;
    margin-top: 4rem;
    cursor: pointer;
    transition: 0.5s ease;
    font-weight: bold;
    font-family: 'Ubuntu', sans-serif;

    :hover {
        background: ${AppTheme.lightGreen};
        color: ${AppTheme.white};
    }
`