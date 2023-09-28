import React, { FC } from "react";
import {
    ProjectCardMetadataWrapper,
    ProjectCardThumbnail,
    ProjectCardWrapper
} from "@components/components/ProjectCard/ProjectCard.css";
import { Separator } from "@components/components/Resume/Resume.css";
import { GeneralButton } from "@components/components/HeroCard/HeroCard.css";

export const ProjectCard: FC = () => {
    return (
        <ProjectCardWrapper>
            <ProjectCardThumbnail src={'https://imagizer.imageshack.com/img922/4489/wlMMgs.jpg'} />
            <ProjectCardMetadataWrapper>
                <Separator paddingValue={1} />
                <h1>Title metadata</h1>
                <Separator paddingValue={1.25} />
                <p>
                    This amazing bus simulator will allow you to transport passengers across three different cities (Rio de Janeiro, Munich and Los Angeles) using various bus models with realistic physics and graphics. Play this bus simulator in single-player with career and freeride modes or immerse yourself with friends in the online multiplayer mode. Bus Driving  Sim 22 is the defining bus simulator for PC.
                </p>
                <GeneralButton>
                    Read more
                </GeneralButton>
                <Separator paddingValue={1} />
            </ProjectCardMetadataWrapper>
        </ProjectCardWrapper>
    )
};