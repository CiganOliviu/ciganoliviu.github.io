import styled from "styled-components";

export const SocialLinksContainer = styled.div`
    padding: 1rem;
`;

export const SocialLink = styled.a`
    margin: 0 1rem 0 1rem;
`;

export const SocialLinkImage = styled.img`
    width: 2rem;
    height: 2rem;
    transition: all 150ms ease;
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(201deg) brightness(102%) contrast(103%);

    :hover {
        filter: invert(71%) sepia(16%) saturate(2855%) hue-rotate(109deg) brightness(94%) contrast(75%);
        transition: all 150ms ease;
    }
`;