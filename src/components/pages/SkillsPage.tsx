import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";
import { SkillContainer } from "../../styled/Skills/SkillContainer";
import { SkillPageBubble } from "../../styled/Portfolio/SkillBubble";
import { StyledLinkButton } from "../../styled/Common/StyledLink";

export const SkillsPage = () => {
  const skills: string[] = [
    "TypeScript",
    "JavaScript",
    "Html5",
    "NodeJs",
    "CSS",
    "SCSS",
    "ReactJs",
    "C#",
    ".NET",
    "MAUI",
    "WPF",
    "MongoDb",
    "SQLite",
    "GraphQL",
    // "Mui",
  ];

  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Skills page</h1>
        </ColCentered>
        <ColFlexedCenter>
          <SkillContainer>
            {skills.map((s, i) => (
              <SkillPageBubble key={i}>{s}</SkillPageBubble>
            ))}
          </SkillContainer>
          <StyledLinkButton
            href="./public/PetraElgemyrCv.pdf"
            download={"PetraElgemyrCv.pdf"}
          >
            Click here to download my resume/CV
          </StyledLinkButton>
        </ColFlexedCenter>
      </PageMarginTop>
    </>
  );
};
