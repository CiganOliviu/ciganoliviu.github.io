import React, { FC } from "react";
import { ProjectColumn, ProjectsFlexWrapper, ProjectsWrapper } from "@components/components/Projects/Projects.css";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ProjectsConfig } from "@components/utils/config";

export const Projects: FC = () => {
    return (
        <ProjectsWrapper>
            {TextContainer({backText: 'Projects', overText: 'My Extra Work and Research'})}
            <ProjectsFlexWrapper>
                {ProjectsConfig.map((project) => {
                    return (
                        <ProjectColumn>
                            <ProjectCard title={project.title} content={project.content} />
                        </ProjectColumn>
                    )
                })}
            </ProjectsFlexWrapper>
        </ProjectsWrapper>
    )
};