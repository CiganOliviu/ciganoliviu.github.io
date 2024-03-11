import React, { FC } from "react";
import { ProjectsWrapper } from "@components/components/ProjectsPreview/Projects.css";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { Logo } from "@components/components/Logo/Logo";
import { Footer } from "@components/components/Footer/Footer";
import { ProjectsLister } from "@components/components/ProjectsLister/ProjectsLister";
import { AppTheme } from "@components/utils/cssMedia";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/hooks/useScreenSize";
import { getStandardHeaderForPages } from "@components/pages/index";

const Projects: FC = () => {
    const { isMobile } = useGetScreenSize();

    return (
        <React.Fragment>
            {getStandardHeaderForPages("Cigan Oliviu David", "Unveil Cigan Oliviu David's expertise and creativity in Software Engineering through a portfolio of innovative projects. Reach out for collaborations or inquiries. Your destination for skillful projects and seamless connections.")}
            <ProjectsWrapper>
                <Logo />
                {!isMobile() && <ScrollTopButton />}
                <ProjectsLister projectsList={ProjectsConfig} />
                <Footer backgroundColor={AppTheme.darkerClose}  />
            </ProjectsWrapper>
        </React.Fragment>
    )
}

export default Projects;