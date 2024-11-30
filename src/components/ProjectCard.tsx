import { ProjectContainer } from "../styled/Portfolio/ProjectContainer";
import {
  ProjectImage,
  ProjectImageContainer,
} from "../styled/Portfolio/ProjectImageContainer";
import { IProject } from "./interfaces/IProject";

export interface IProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: IProjectCardProps) => {
  return (
    <>
      {project ? (
        <ProjectContainer>
          {project.img}
          {project.name}
          {project.description}

          <ProjectImageContainer>
            <ProjectImage
            // src={`https:${project.img}}`}
            // alt={project.name}
            ></ProjectImage>
          </ProjectImageContainer>
        </ProjectContainer>
      ) : (
        <></>
      )}
    </>
  );
};
