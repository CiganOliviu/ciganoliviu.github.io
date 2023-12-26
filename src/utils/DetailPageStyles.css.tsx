import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ContentOnlyWrapper = styled.div`
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.cardContentGray};
    font-weight: bold;
    min-height: 100vh;
    padding: 2rem 20rem 5rem 20rem;
    line-height: 2rem;
    font-size: 1rem;
`;