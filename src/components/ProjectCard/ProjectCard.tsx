import React, { FC } from "react";
import {
    ProjectCardContent,
    ProjectCardMetadataWrapper,
    ProjectCardThumbnail, ProjectCardTitle,
    ProjectCardWrapper
} from "@components/components/ProjectCard/ProjectCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { GeneralLink } from "@components/components/HeroCard/HeroCard.css";
import { ExternalSocialLinksConfig } from "@components/utils/config";

type ProjectCardType = {
    thumbnail: string;
    title: string;
    content: string;
    openLink: string;
};

export const ProjectCard: FC<ProjectCardType> = ({ title, content, thumbnail, openLink  }) => {
    return (
        <ProjectCardWrapper>
            <ProjectCardThumbnail src={thumbnail} alt={title} />
            <ProjectCardMetadataWrapper>
                <Separator paddingValue={1} />
                <ProjectCardTitle>{title}</ProjectCardTitle>
                <Separator paddingValue={1.25} />
                <ProjectCardContent>
                    {content}
                </ProjectCardContent>
                {openLink &&
                    <GeneralLink
                        href={openLink}
                        target={ExternalSocialLinksConfig.target}
                        rel={ExternalSocialLinksConfig.rel}
                    >
                        Read more
                    </GeneralLink>
                }
                <Separator paddingValue={1} />
            </ProjectCardMetadataWrapper>
        </ProjectCardWrapper>
    )
};