import {
  AboutImage,
  AboutImageContainer,
  AboutMeImgDescriptionWrapper,
  AboutTextContainer,
} from "../../styled/About/AboutImage";
import { CodeBoxWrapper, CodeBox } from "../../styled/About/CodeBox";
import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";

export const AboutPage = () => {
  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>About me</h1>
          <ColFlexedCenter>
            <AboutMeImgDescriptionWrapper>
              <AboutImageContainer>
                <AboutImage src="/IMG_6208.jpg" alt="Petra Elgemyr" />
              </AboutImageContainer>

              <AboutTextContainer>
                <p>
                  Om mig... jag är based i sthlm Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Veritatis ipsam quidem
                  reiciendis, distinctio voluptate, eum officia eos cum
                  perferendis tempore quod velit voluptas aliquid quae inventore
                  aliquam nam accusantium sit?
                </p>
              </AboutTextContainer>
            </AboutMeImgDescriptionWrapper>
            <CodeBoxWrapper>
              <CodeBox>{/* Sätt in gammal javascript och html här */}</CodeBox>
            </CodeBoxWrapper>
          </ColFlexedCenter>
        </ColCentered>
      </PageMarginTop>
    </>
  );
};
