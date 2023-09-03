import React, { FC } from "react";
import { SocialLink, SocialLinkImage, SocialLinksContainer } from "@components/components/SocialLinks/SocialLinks.css";
import { ExternalSocialLinksConfig } from "@components/utils/config";

export const SocialLinks: FC = () => {
    return (
        <SocialLinksContainer>
            {
                ExternalSocialLinksConfig.links.map((item, index) => {
                    return (
                        <SocialLink href={item.url}
                                    target={ExternalSocialLinksConfig.target}
                                    rel={ExternalSocialLinksConfig.rel}
                        >
                            <SocialLinkImage src={item.iconSource} />
                        </SocialLink>
                    )
                })
            }
        </SocialLinksContainer>
    )
};