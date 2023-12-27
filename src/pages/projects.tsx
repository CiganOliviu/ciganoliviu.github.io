import React, { FC } from "react";
import { ProjectColumn, ProjectsFlexWrapper, ProjectsWrapper } from "@components/components/Projects/Projects.css";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { Logo } from "@components/components/Logo/Logo";

const Projects: FC = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ProjectsWrapper>
            <Logo />
            {TextContainer({backText: 'Projects', overText: 'My Extra Work and Research'})}
            <ProjectsFlexWrapper isMobile={isMobile()} isTablet={isTablet()}>
                {ProjectsConfig.map((project) => {
                    return (
                        <ProjectColumn key={project.title}>
                            <ProjectCard title={project.title}
                                         subtitle={project.subtitle}
                                         previewHtmlField={project.previewHtmlField}
                                         htmlField={project.htmlField}
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
}

export default Projects;