import React, { FC } from "react";
import {
    ProjectCardContent,
    ProjectCardMetadataWrapper,
    ProjectCardThumbnail,
    ProjectCardTitle,
    ProjectCardWrapper,
    ProjectMarker
} from "@components/components/ProjectCard/ProjectCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { InternalLink } from "@components/components/HeroCard/HeroCard.css";
import { createCanonicalLink } from "@components/utils/detailPageManipulations";

type ProjectCardType = {
    thumbnail: string;
    title: string;
    subtitle: string,
    previewHtmlField: { __html: string | TrustedHTML },
    htmlField: { __html: string | TrustedHTML },
    openLink: string;
    is_in_progress: boolean,
};

export const ProjectCard: FC<ProjectCardType> = ({
    title,
    previewHtmlField,
    htmlField,
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
                <ProjectCardContent dangerouslySetInnerHTML={previewHtmlField} />
                {openLink &&
                    <InternalLink
                        href={`/project-detail-${createCanonicalLink(title)}`}
                    >
                        Read more
                    </InternalLink>
                }
                <Separator paddingValue={1} />
            </ProjectCardMetadataWrapper>
        </ProjectCardWrapper>
    )
};