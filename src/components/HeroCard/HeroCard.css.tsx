import styled from "styled-components";

export const HeroCardBox = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://res.cloudinary.com/practicaldev/image/fetch/s--ivd9kMB---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://images.unsplash.com/photo-1569012871812-f38ee64cd54c%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1650%26q%3D80') no-repeat center center fixed;
    background-size: cover;
    position: relative;
    height: 100vh;
`;

export const HeroCardContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
`;

export const HeroCardWelcomeText = styled.div`
    font-size: 2rem;  
`;

export const HeroCardTypeAnimationText = styled.div`
    margin-top: 2rem;
    font-size: 4rem;
`

export const HeroCardContinuityText = styled.div`
    margin-top: 2rem;  
    font-size: 1.4rem;
`;

export const HeroCardContactButton = styled.div`
    color: #20c997;
    background: transparent;
    border: solid #20c997;
    border-radius: 2rem;
    padding: 0.8rem 1.8rem 0.8rem 1.8rem; 
    text-align: center; 
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    margin-top: 4rem;
    cursor: pointer;
    transition: 0.5s ease;
    
    :hover {
        background: #20c997;
        color: white;
      
    }
`