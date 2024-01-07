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
import { ProjectConfigType } from "@components/utils/types";

export const ProjectCard: FC<ProjectConfigType> = ({
    title,
    previewHtmlField,
    thumbnail,
    open_link,
    is_in_progress,
    is_research_paper
}) => {
    return (
        <ProjectCardWrapper>
            { is_in_progress && <ProjectMarker>In progress</ProjectMarker>}
            { is_research_paper && <ProjectMarker>Research Paper</ProjectMarker>}
            <ProjectCardThumbnail src={thumbnail} alt={title} />
            <ProjectCardMetadataWrapper>
                <Separator paddingValue={1} />
                <ProjectCardTitle>{title}</ProjectCardTitle>
                <Separator paddingValue={1.25} />
                <ProjectCardContent dangerouslySetInnerHTML={previewHtmlField} />
                {!is_in_progress &&
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