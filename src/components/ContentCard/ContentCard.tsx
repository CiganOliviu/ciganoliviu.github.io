import {
    ContentCardBox,
    ContentCardDate, ContentCardFlexBox, ContentCardLogo,
    ContentCardSubTitle,
    ContentCardText,
    ContentCardTitle
} from "@components/components/ContentCard/ContentCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import React, { FC } from "react";
import { ContentCardContext } from "@components/utils/types";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { GeneralLink } from "@components/components/HeroCard/HeroCard.css";
import { ExternalSocialLinksConfig } from "@components/configs/config";
import Link from "next/link";

export const ContentCard: FC<ContentCardContext> = ({context}) => {
    const { isMobile } = useGetScreenSize();
    const isMobileResolution = isMobile();

    return (
        <ContentCardBox isMobile={isMobileResolution}>
            <ContentCardFlexBox>
                <div>
                    <ContentCardDate>{context.date}</ContentCardDate>
                    <Separator paddingValue={0.6} />
                    <ContentCardTitle>{context.title}</ContentCardTitle>
                    <Separator paddingValue={0.6} />
                    <ContentCardSubTitle>{context.subtitle}</ContentCardSubTitle>
                </div>
                <ContentCardLogo src={context.logo} alt={context.logo} />
            </ContentCardFlexBox>
            <Separator paddingValue={0.8} />
            <ContentCardText isMobile={isMobileResolution} dangerouslySetInnerHTML={context.previewHtmlField} />
            <Separator paddingValue={1} />
            <GeneralLink
                href={'#'}
            >
                <Link href={`/${context.title}`}>Read more</Link>
            </GeneralLink>
        </ContentCardBox>
    )
}