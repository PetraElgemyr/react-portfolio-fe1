import { Col } from "../../styled/Common/Common";
import { ProjectCard } from "../../styled/Portfolio/ProjectCard";

export const PortfolioPage = () => {
  return (
    <>
      <h1>Portfolio</h1>

      <Col>
        <ProjectCard />
        <ProjectCard />
      </Col>
    </>
  );
};
