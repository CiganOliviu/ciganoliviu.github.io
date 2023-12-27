import React, { FC } from "react";
import { ProjectColumn, ProjectsFlexWrapper, ProjectsWrapper } from "@components/components/Projects/Projects.css";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { TextContainer } from "@components/components/TextContainer/TextContainer";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { PreviewProjectsConfig } from "@components/configs/projectsConfig";
import { Separator } from "@components/components/Resume/Resume.css";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import Link from "next/link";
import { AppTheme } from "@components/utils/cssMedia";

export const PreviewProjects: FC = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <ProjectsWrapper>
            {TextContainer({backText: 'Projects', overText: 'My Extra Work and Research'})}
            <ProjectsFlexWrapper isMobile={isMobile()} isTablet={isTablet()}>
                {PreviewProjectsConfig.map((project) => {
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
            <Separator paddingValue={2} />
            <ContentLinkWrapper contentLinkBackground={AppTheme.darkerOpen} style={{ textAlign: 'center' }}>
                <Link href={'/projects'}>Check Extra Work and Research</Link>
            </ContentLinkWrapper>
            <Separator paddingValue={2} />
        </ProjectsWrapper>
    )
};