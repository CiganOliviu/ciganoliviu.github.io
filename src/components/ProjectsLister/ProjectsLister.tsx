import React, { FC } from "react";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { ProjectColumn, ProjectsFlexWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { ProjectConfigType } from "@components/utils/types";

type ProjectsListerType = {
    projectsList: ProjectConfigType[];
};

export const ProjectsLister: FC<ProjectsListerType> = ({ projectsList }) => {
    return (
        <React.Fragment>
            {TextContainer({backText: 'Projects', overText: 'My Extra Work and Research'})}
            <ProjectsFlexWrapper>
                {projectsList.map((project: ProjectConfigType) => {
                    return (
                        <ProjectColumn key={project.title}>
                            <ProjectCard title={project.title}
                                         subtitle={project.subtitle}
                                         previewHtmlField={project.previewHtmlField}
                                         htmlField={project.htmlField}
                                         thumbnail={project.thumbnail}
                                         open_link={project.open_link}
                                         is_in_progress={project.is_in_progress}
                                         is_research_paper={project.is_research_paper}
                            />
                        </ProjectColumn>
                    )
                })}
            </ProjectsFlexWrapper>
        </React.Fragment>
    );
};