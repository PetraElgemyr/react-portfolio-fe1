import { AboutImage, AboutImageContainer } from "../../styled/About/AboutImage";
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
        </ColCentered>
      </PageMarginTop>
    </>
  );
};
