import React, { FC } from "react";
import {
    ProjectCardContent,
    ProjectCardMetadataWrapper, ProjectCardThumbnail,
    ProjectCardTitle,
    ProjectCardWrapper, ProjectMarker
} from "@components/components/ProjectCard/ProjectCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { ExternalLink } from "@components/components/HeroCard/HeroCard.css";
import { ExternalSocialLinksConfig } from "@components/configs/config";

type ProjectCardType = {
    thumbnail: string;
    title: string;
    content: string;
    openLink: string;
    is_in_progress: boolean,
};

export const ProjectCard: FC<ProjectCardType> = ({
    title,
    content,
    thumbnail,
    openLink,
    is_in_progress,
}) => {
    return (
        <ProjectCardWrapper>
            { is_in_progress && <ProjectMarker>In progress</ProjectMarker>}
            <ProjectCardThumbnail src={thumbnail} alt={title} />
            <ProjectCardMetadataWrapper>
                <Separator paddingValue={1} />
                <ProjectCardTitle>{title}</ProjectCardTitle>
                <Separator paddingValue={1.25} />
                <ProjectCardContent>
                    {content}
                </ProjectCardContent>
                {openLink &&
                    <ExternalLink
                        href={openLink}
                        target={ExternalSocialLinksConfig.target}
                        rel={ExternalSocialLinksConfig.rel}
                    >
                        Read more
                    </ExternalLink>
                }
                <Separator paddingValue={1} />
            </ProjectCardMetadataWrapper>
        </ProjectCardWrapper>
    )
};