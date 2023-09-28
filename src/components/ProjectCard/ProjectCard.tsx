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
    title: string;
    content: string;
};

export const ProjectCard: FC<ProjectCardType> = ({ title, content }) => {
    return (
        <ProjectCardWrapper>
            <ProjectCardThumbnail src={'https://imagizer.imageshack.com/img922/4489/wlMMgs.jpg'} />
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