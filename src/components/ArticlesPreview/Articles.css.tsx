import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ArticlesPreviewWrapper = styled.div<{ backgroundColor: string }>`
    background: ${(props) => props.backgroundColor};
    color: ${AppTheme.white};
`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    padding: 2rem;

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 0;
        flex-direction: row;
    }
`;