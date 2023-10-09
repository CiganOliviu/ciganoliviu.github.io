import React, { FC } from "react";
import {
    ProjectCardContent,
    ProjectCardMetadataWrapper,
    ProjectCardThumbnail, ProjectCardTitle,
    ProjectCardWrapper
} from "@components/components/ProjectCard/ProjectCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { GeneralButton } from "@components/components/HeroCard/HeroCard.css";

type ProjectCardType = {
    thumbnail: string;
    title: string;
    content: string;
};

export const ProjectCard: FC<ProjectCardType> = ({ title, content, thumbnail  }) => {
    return (
        <ProjectCardWrapper>
            <ProjectCardThumbnail src={thumbnail} />
            <ProjectCardMetadataWrapper>
                <Separator paddingValue={1} />
                <ProjectCardTitle>{title}</ProjectCardTitle>
                <Separator paddingValue={1.25} />
                <ProjectCardContent>
                    {content}
                </ProjectCardContent>
                <GeneralButton>
                    Read more
                </GeneralButton>
                <Separator paddingValue={1} />
            </ProjectCardMetadataWrapper>
        </ProjectCardWrapper>
    )
};