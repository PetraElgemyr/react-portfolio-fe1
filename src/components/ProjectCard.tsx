import { ProjectContainer } from "../styled/Portfolio/ProjectContainer";
import {
  ProjectImage,
  ProjectImageContainer,
} from "../styled/Portfolio/ProjectImageContainer";
import {
  ProjectCardText,
  ProjectCardTextCenterContainer,
  ProjectCardTextContainer,
  ProjectCardTitle,
} from "../styled/Portfolio/ProjectText";
import { IProject } from "./interfaces/IProject";
import { StyledLink } from "../styled/Common/StyledLink";

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
          </ProjectCardTextContainer>
          <ProjectCardTextCenterContainer>
            <StyledLink target="_blank" href={project.github}>
              Github
            </StyledLink>
            {project.liveLink ? (
              <StyledLink target="_blank" href={project.liveLink}>
                Try it
              </StyledLink>
            ) : null}
          </ProjectCardTextCenterContainer>
        </ProjectContainer>
      ) : (
        <></>
      )}
    </>
  );
};
