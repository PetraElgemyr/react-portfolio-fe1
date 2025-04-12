import { useEffect } from "react";
import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";
import { Footer } from "../Footer";
import { useAppContext } from "../hooks/useAppContext";
import { IIsFixedNavbarProps } from "../interfaces/IIsFixedNavbarProps";
import { ProjectCard } from "../ProjectCard";
import { useLocation } from "react-router-dom";

export const PortfolioPage = ({ isFixed }: IIsFixedNavbarProps) => {
  const location = useLocation();
  const { setActivePage, projects } = useAppContext();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname, setActivePage]);

  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Portfolio</h1>
        </ColCentered>

        <ColFlexedCenter>
          {projects.length > 0 ? (
            projects
              .reverse()
              .map((p) => <ProjectCard key={p.id} project={p}></ProjectCard>)
          ) : (
            <article>Projects comming soon!</article>
          )}
        </ColFlexedCenter>
      </PageMarginTop>
      <Footer isFixed={isFixed}></Footer>
    </>
  );
};
