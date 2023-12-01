import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const KnowMeMoreBox = styled.div`
    background: ${AppTheme.darkerClose};
    color: ${AppTheme.white};
`;

export const KnowMeMoreInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    ${minWidthQuery(Breakpoints.medium)} {
        flex-direction: row;
    }
  
    ${minWidthQuery(Breakpoints.large)} {
        text-align: left;
    }
`;

export const HighLight = styled.span`
    color: ${AppTheme.lightGreen};
`;

export const HighLightWhite = styled.span`
    color: ${AppTheme.white}
`

export const KnowMeMoreTable = styled.div`
    display: flex;  
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
`;

export const KnowMeMoreTableHeader = styled.p`
    color: ${AppTheme.cardContentGray}
`;

export const KnowMeMoreTableHeaderBorder = styled.div`
    width: 50%;
    height: 1px;
    background: ${AppTheme.darkerOpen};
`;