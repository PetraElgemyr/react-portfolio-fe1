import {
  BlackBox,
  ProjectContainer,
} from "../styled/Portfolio/ProjectContainer";
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
import { SkillBubble, SkillsContainer } from "../styled/Portfolio/SkillBubble";

export interface IProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <>
      {project ? (
        <ProjectContainer>
          <BlackBox>
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

              {/* todo sätt in skills bubblor */}
            </ProjectCardTextCenterContainer>

            <SkillsContainer>
              {project.techniques.length > 0 ? (
                project.techniques.map((t, index) => (
                  <SkillBubble key={index}>{t}</SkillBubble>
                ))
              ) : (
                <></>
              )}
            </SkillsContainer>
          </BlackBox>
        </ProjectContainer>
      ) : (
        <></>
      )}
    </>
  );
};
