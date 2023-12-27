import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const FooterContainerBox = styled.div<{ backgroundColor: string }>`
    background: ${(props) => props.backgroundColor};
    padding: 4rem 2rem 2rem 4rem;
    font-weight: bold;
    text-align: center;
    color: ${AppTheme.white};
`;