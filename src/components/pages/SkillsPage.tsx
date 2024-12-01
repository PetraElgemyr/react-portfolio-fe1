import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";
import { SkillContainer } from "../../styled/Skills/SkillContainer";

export const SkillsPage = () => {
  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Skills page</h1>
        </ColCentered>
        <ColFlexedCenter>
          <SkillContainer></SkillContainer>
        </ColFlexedCenter>
      </PageMarginTop>
    </>
  );
};
