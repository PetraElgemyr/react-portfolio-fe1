import {
  AboutImage,
  AboutImageContainer,
  AboutTextContainer,
} from "../../styled/About/AboutImage";
import { ColCentered, PageMarginTop } from "../../styled/Common/Common";

export const AboutPage = () => {
  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>About me</h1>
          <AboutImageContainer>
            <AboutImage src="/IMG_6208.jpg" alt="Petra Elgemyr" />
          </AboutImageContainer>

          <AboutTextContainer>
            <span>Hejhej</span>
            <p>Info här</p>
          </AboutTextContainer>
        </ColCentered>
      </PageMarginTop>
    </>
  );
};
