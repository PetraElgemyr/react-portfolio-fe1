import { ColFlexedCenter } from "../../styled/Common/Common";
import { ProjectCard } from "../../styled/Portfolio/ProjectCard";
import {
  Image,
  ProjectImageContainer,
} from "../../styled/Portfolio/ProjectImageContainer";

export const PortfolioPage = () => {
  return (
    <>
      <h1>Portfolio</h1>

      <ColFlexedCenter>
        <ProjectCard>
          <ProjectImageContainer>
            Projekt placeholder
            <Image
            // src={`https:${dog.img[0].fields.file.url}`}
            // alt={project.name}
            ></Image>
          </ProjectImageContainer>
        </ProjectCard>
        <ProjectCard>Projekt placeholder</ProjectCard>
        <ProjectCard>Projekt placeholder</ProjectCard>
        <ProjectCard>Projekt placeholder</ProjectCard>
      </ColFlexedCenter>
    </>
  );
};
