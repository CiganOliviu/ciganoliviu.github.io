import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const PageWallpaperCss = styled.div<{ url: string }>`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${(props) => props.url}) center;
    background-size: cover;
    position: relative;
    height: 60vh;
    color: ${AppTheme.white};
`;

export const PageWallpaperTitle = styled.h1`
    font-weight: bold;
    font-size: 2rem; 

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 2.5rem
    }
`;

export const PageWallpaperSubtitle = styled.div`
    margin-top: 2rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: ${AppTheme.lightGreen};

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1.8rem;
    }
  
`;