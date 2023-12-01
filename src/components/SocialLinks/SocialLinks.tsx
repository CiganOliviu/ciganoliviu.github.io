import React, { FC } from "react";
import { SocialLink, SocialLinkImage, SocialLinksContainer } from "@components/components/SocialLinks/SocialLinks.css";
import { ExternalSocialLinksConfig } from "@components/utils/config";

export const SocialLinks: FC = () => {
    return (
        <SocialLinksContainer>
            {
                ExternalSocialLinksConfig.links.map((item) => {
                    return (
                        <SocialLink href={item.url}
                                    target={ExternalSocialLinksConfig.target}
                                    rel={ExternalSocialLinksConfig.rel}
                                    key={item.url}
                        >
                            <SocialLinkImage src={item.iconSource} alt={item.url} />
                        </SocialLink>
                    )
                })
            }
        </SocialLinksContainer>
    )
};