import styled from "styled-components";
import { AppTheme, Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const TextContainerBox = styled.div`
    text-align: center;
    position: relative;
`

export const BackTextBox = styled.h1`
    color: ${AppTheme.openGray};
    text-align: center;
    font-size: 3.5rem;
    opacity: 0.2;
    z-index: 1;
    line-height: 15rem;
    
    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 7rem;
        line-height: 20rem;
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
    border-bottom: 0.3rem solid transparent;
    
    :after {
        content: "";
        display: block;
        height: 1rem;
        border-bottom: 0.3rem solid ${AppTheme.lightGreen};
        width: 20%;
        margin-left: 40%;
      
        ${minWidthQuery(Breakpoints.nano)} {
            width: 10%;
            margin-left: 45%;
        }
    }
  
    ${minWidthQuery(Breakpoints.medium)} {
        top: 57%;
    }
`;