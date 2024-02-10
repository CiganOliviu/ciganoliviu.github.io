import React, { FC } from "react";
import { ProjectsWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { Separator } from "@components/components/Resume/Resume.css";
import { ContentLinkWrapper } from "@components/utils/DetailPageStyles.css";
import Link from "next/link";
import { AppTheme } from "@components/utils/cssMedia";
import { ProjectsLister } from "@components/components/ProjectsLister/ProjectsLister";
import { ProjectConfigType } from "@components/utils/types";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

export const PreviewProjects: FC = () => {
    const { isBigScreen } = useGetScreenSize();
    const PreviewProjectsConfig: ProjectConfigType[] = ProjectsConfig.slice(0, isBigScreen() ? 3 : 2);

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