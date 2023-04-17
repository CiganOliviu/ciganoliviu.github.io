import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const TextContainerBox = styled.div`
    text-align: center;
    position: relative;
`

export const BackTextBox = styled.h1`
    color: ${AppTheme.openGray};
    text-align: center;
    font-size: 5rem;
    opacity: 0.2;
    z-index: 1;
    line-height: 20rem;

    
    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 10rem;
    }
`;

export const OverTextBox = styled.p`
    color: ${AppTheme.white};
    font-size: 2rem;
    font-weight: bold;
    position: absolute;
    top: 55%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;

    ${minWidthQuery(Breakpoints.medium)} {
      top: 57%;
    }
`;

export const Separator = styled.div<{ paddingValue?: number }>`
    padding: ${(props) => props.paddingValue || 0.3}rem;
`;

export const OverTextBorder = styled.div`
    background: ${AppTheme.lightGreen};
    width: 6%;
    height: 0.3rem;
    margin: 0 auto;
`;