import React, { FC } from "react";
import { ProjectsWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { Logo } from "@components/components/Logo/Logo";
import { Footer } from "@components/components/Footer/Footer";
import { ProjectsLister } from "@components/components/ProjectsLister/ProjectsLister";
import { AppTheme } from "@components/utils/cssMedia";

const Projects: FC = () => {
    return (
        <ProjectsWrapper>
            <Logo />
            <ProjectsLister  projectsList={ProjectsConfig} />
            <Footer backgroundColor={AppTheme.darkerOpen}  />
        </ProjectsWrapper>
    )
}

export default Projects;