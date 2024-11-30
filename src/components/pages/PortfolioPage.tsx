import { ColFlexedCenter } from "../../styled/Common/Common";
import { useAppContext } from "../hooks/useAppContext";
import { ProjectCard } from "../ProjectCard";

export const PortfolioPage = () => {
  const { projects } = useAppContext();

  return (
    <>
      <h1>Portfolio</h1>

      <ColFlexedCenter>
        {projects.length > 0 ? (
          projects.map((p) => (
            <ProjectCard key={p.id} project={p}></ProjectCard>
          ))
        ) : (
          <></>
        )}
      </ColFlexedCenter>
    </>
  );
};
