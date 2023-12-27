import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const FooterContainerBox = styled.div<{ backgroundColor: string }>`
    background: ${(props) => props.backgroundColor};
    padding: 2rem 1rem 1rem 2rem;
    font-weight: bold;
    text-align: center;
    color: ${AppTheme.white};

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 4rem 2rem 2rem 4rem;
    }
`;