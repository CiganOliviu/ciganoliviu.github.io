import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const PageWallpaperCss = styled.div<{ url: string }>`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${(props) => props.url})
    center;
    background-size: cover;
    position: relative;
    height: 40vh;
    color: ${AppTheme.white};
`;