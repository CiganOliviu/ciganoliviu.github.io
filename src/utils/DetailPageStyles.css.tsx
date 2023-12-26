import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const ContentOnlyWrapper = styled.div`
    text-align: center;
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.cardContentGray};
    font-weight: bold;
    min-height: 100vh;
    padding: 2rem 5rem 5rem 5rem;
    line-height: 2rem;
`;