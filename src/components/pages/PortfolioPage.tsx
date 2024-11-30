import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";
import { useAppContext } from "../hooks/useAppContext";
import { ProjectCard } from "../ProjectCard";

export const PortfolioPage = () => {
  const { projects } = useAppContext();

  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Portfolio</h1>
        </ColCentered>

        <ColFlexedCenter>
          {projects.length > 0 ? (
            projects.map((p) => (
              <ProjectCard key={p.id} project={p}></ProjectCard>
            ))
          ) : (
            <article>Projects comming soon!</article>
          )}
        </ColFlexedCenter>
      </PageMarginTop>
    </>
  );
};
