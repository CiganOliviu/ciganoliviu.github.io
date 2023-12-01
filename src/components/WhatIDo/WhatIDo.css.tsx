import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const WhatIDoBox = styled.div`
    background: ${AppTheme.darkerOpen};
    color: ${AppTheme.white};
`;

export const WhatIDoCardFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    ${minWidthQuery(Breakpoints.medium)} {
        flex-direction: row;
    }
`