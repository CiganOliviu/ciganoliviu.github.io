import React, { FC } from "react";
import { ProjectColumn, ProjectsFlexWrapper, ProjectsWrapper } from "@components/components/Projects/Projects.css";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { TextContainer } from "@components/components/TextContainer/TextContainer";

export const Projects: FC = () => {
    return (
        <ProjectsWrapper>
            {TextContainer({backText: 'Projects', overText: 'My Extra Work and Research'})}
            <ProjectsFlexWrapper>
                <ProjectColumn>
                    <ProjectCard />
                </ProjectColumn>
                <ProjectColumn>
                    <ProjectCard />
                </ProjectColumn>
                <ProjectColumn>
                    <ProjectCard />
                </ProjectColumn>
                <ProjectColumn>
                    <ProjectCard />
                </ProjectColumn>
            </ProjectsFlexWrapper>
        </ProjectsWrapper>
    )
};