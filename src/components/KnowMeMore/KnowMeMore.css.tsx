import styled from "styled-components";
import { AppTheme } from "@components/utils/cssMedia";

export const KnowMeMoreBox = styled.div`
    background: ${AppTheme.darkerClose};
`;

export const KnowMeMoreInfoContainer = styled.div`
    display: flex;
    justify-content: center;
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