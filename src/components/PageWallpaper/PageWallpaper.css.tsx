import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const PageWallpaperCss = styled.div<{ url: string }>`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${(props) => props.url})
    center;
    background-size: cover;
    position: relative;
    height: 60vh;
    color: ${AppTheme.white};
`;

export const PageWallpaperTitle = styled.h1`
    font-weight: bold;
    font-size: 3rem
`;

export const PageWallpaperSubtitle = styled.div`
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${AppTheme.lightGreen};
`;