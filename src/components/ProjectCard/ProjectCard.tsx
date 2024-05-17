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
import { InternalLink } from "@components/components/LandingArea/LandingArea.css";
import { ProjectConfigType } from "@components/utils/types";

export const ProjectCard: FC<ProjectConfigType> = ({
    id,
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
                {!is_in_progress && !is_research_paper &&
                    <InternalLink
                        href={`/project-detail-${id}`}
                    >
                        Read more
                    </InternalLink>
                }
                {is_research_paper && open_link &&
                    <InternalLink
                        href={open_link}
                        target={'_blank'}
                    >
                        Read Research Paper
                    </InternalLink>
                }
                <Separator paddingValue={1} />
            </ProjectCardMetadataWrapper>
        </ProjectCardWrapper>
    )
};