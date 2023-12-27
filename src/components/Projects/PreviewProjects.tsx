import React, { FC } from "react";
import { ProjectsWrapper } from "@components/components/Projects/Projects.css";
import { PreviewProjectsConfig } from "@components/configs/projectsConfig";
import { Separator } from "@components/components/Resume/Resume.css";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import Link from "next/link";
import { AppTheme } from "@components/utils/cssMedia";
import { ProjectsLister } from "@components/components/ProjectsLister/ProjectsLister";

export const PreviewProjects: FC = () => {
    return (
        <ProjectsWrapper>
            <ProjectsLister projectsList={PreviewProjectsConfig} />
            <Separator paddingValue={2} />
            <ContentLinkWrapper contentLinkBackground={AppTheme.darkerOpen} style={{ textAlign: 'center' }}>
                <Link href={'/projects'}>Check Extra Work and Research</Link>
            </ContentLinkWrapper>
            <Separator paddingValue={2} />
        </ProjectsWrapper>
    )
};