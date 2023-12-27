import React, { FC } from "react";
import { ProjectsWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { Logo } from "@components/components/Logo/Logo";
import { Footer } from "@components/components/Footer/Footer";
import { ProjectsLister } from "@components/components/ProjectsLister/ProjectsLister";
import { AppTheme } from "@components/utils/cssMedia";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";

const Projects: FC = () => {
    const { isMobile } = useGetScreenSize();

    return (
        <ProjectsWrapper>
            <Logo />
            {!isMobile() && <ScrollTopButton />}
            <ProjectsLister  projectsList={ProjectsConfig} />
            <Footer backgroundColor={AppTheme.darkerClose}  />
        </ProjectsWrapper>
    )
}

export default Projects;