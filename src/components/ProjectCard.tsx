import { Link } from "react-router-dom";
import { ProjectContainer } from "../styled/Portfolio/ProjectContainer";
import {
  ProjectImage,
  ProjectImageContainer,
} from "../styled/Portfolio/ProjectImageContainer";
import {
  ProjectCardText,
  ProjectCardTextContainer,
  ProjectCardTitle,
} from "../styled/Portfolio/ProjectText";
import { IProject } from "./interfaces/IProject";

export interface IProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <>
      {project ? (
        <ProjectContainer>
          <ProjectImageContainer>
            <ProjectImage src={project.img} alt={project.name}></ProjectImage>
          </ProjectImageContainer>
          <ProjectCardTitle>{project.name}</ProjectCardTitle>
          <ProjectCardTextContainer>
            <ProjectCardText>{project.description}</ProjectCardText>
            <ProjectCardText>
              <Link target="_blank" to={project.github}>
                Github
              </Link>
            </ProjectCardText>
            {project.liveLink ? (
              <ProjectCardText>
                <Link target="_blank" to={project.liveLink}>
                  Try it
                </Link>
              </ProjectCardText>
            ) : null}
          </ProjectCardTextContainer>
        </ProjectContainer>
      ) : (
        <></>
      )}
    </>
  );
};
