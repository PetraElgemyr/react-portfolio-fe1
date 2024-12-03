import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";
import { SkillContainer } from "../../styled/Skills/SkillContainer";
import { SkillPageBubble } from "../../styled/Portfolio/SkillBubble";

export const SkillsPage = () => {
  const skills: string[] = [
    "TypeScript",
    "JavaScript",
    "Html5",
    "CSS",
    "SCSS",
    "REACT",
    "C#",
    ".NET",
    "MAUI",
    "WPF",
    "MongoDb",
    "SQLite",
    "GraphQL",
    "Mui",
  ];

  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Skills page</h1>
        </ColCentered>
        <ColFlexedCenter>
          <SkillContainer>
            {skills.map((s) => (
              <SkillPageBubble>{s}</SkillPageBubble>
            ))}
          </SkillContainer>
        </ColFlexedCenter>
      </PageMarginTop>
    </>
  );
};
