import React, { FC } from "react";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ProjectColumn, ProjectsFlexWrapper } from "@components/components/Projects/Projects.css";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

type ProjectsListerType = {
    projectsList: { thumbnail: string, title: string, subtitle: string, previewHtmlField: {__html: string}, htmlField: {__html: string}, open_link: string, is_in_progress: boolean }[];
};

export const ProjectsLister: FC<ProjectsListerType> = ({ projectsList }) => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <React.Fragment>
            {TextContainer({backText: 'Projects', overText: 'My Extra Work and Research'})}
            <ProjectsFlexWrapper isMobile={isMobile()} isTablet={isTablet()}>
                {projectsList.map((project) => {
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
        </React.Fragment>
    );
};