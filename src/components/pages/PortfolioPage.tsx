import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";
import { Footer } from "../Footer";
import { useAppContext } from "../hooks/useAppContext";
import { IIsFixedNavbarProps } from "../interfaces/IIsFixedNavbarProps";
import { ProjectCard } from "../ProjectCard";

export const PortfolioPage = ({ isFixed }: IIsFixedNavbarProps) => {
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
      <Footer isFixed={isFixed}></Footer>
    </>
  );
};
