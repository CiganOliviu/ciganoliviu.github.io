import React, { FC } from "react";
import { ProjectColumn, ProjectsFlexWrapper, ProjectsWrapper } from "@components/components/Projects/Projects.css";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ProjectsConfig } from "@components/utils/config";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

export const Projects: FC = () => {
    const { isMobile } = useGetScreenSize();

    return (
        <ProjectsWrapper>
            {TextContainer({backText: 'Projects', overText: 'My Extra Work and Research'})}
            <ProjectsFlexWrapper isMobile={isMobile()}>
                {ProjectsConfig.map((project) => {
                    return (
                        <ProjectColumn key={project.title}>
                            <ProjectCard title={project.title}
                                         content={project.content}
                                         thumbnail={project.thumbnail}
                                         openLink={project.open_link}
                                         is_in_progress={project.is_in_progress}
                            />
                        </ProjectColumn>
                    )
                })}
            </ProjectsFlexWrapper>
        </ProjectsWrapper>
    )
};