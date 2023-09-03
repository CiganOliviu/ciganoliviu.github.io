import React, { FC } from "react";
import Linkedin from "@components/assets/icons/linkedin.svg";
import Github from "@components/assets/icons/github.svg";
import Whatsapp from "@components/assets/icons/whatsapp.svg";
import { SocialLink, SocialLinkImage, SocialLinksContainer } from "@components/components/SocialLinks/SocialLinks.css";
import Link from "next/link";
import { ExternalSocialLinksConfig } from "@components/utils/config";

export const SocialLinks: FC = () => {

    const redirectToExternalLink = (redirectUrl: string) => {
        window.open(redirectUrl, '_blank');
    }

    return (
        <SocialLinksContainer>
            <SocialLink href={ExternalSocialLinksConfig.links.linkedin}
                        target={ExternalSocialLinksConfig.target}
                        rel={ExternalSocialLinksConfig.rel}
            >
                <SocialLinkImage src={Linkedin.src} />
            </SocialLink>
            <SocialLink href={ExternalSocialLinksConfig.links.github}
                        target={ExternalSocialLinksConfig.target}
                        rel={ExternalSocialLinksConfig.rel}
            >
                <SocialLinkImage src={Github.src} />
            </SocialLink>
            <SocialLink href={ExternalSocialLinksConfig.links.whatsapp}
                        target={ExternalSocialLinksConfig.target}
                        rel={ExternalSocialLinksConfig.rel}
            >
                <SocialLinkImage src={Whatsapp.src} />
            </SocialLink>
        </SocialLinksContainer>
    )
};