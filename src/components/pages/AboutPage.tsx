import {
  AboutImage,
  AboutImageContainer,
  AboutMeImgDescriptionWrapper,
} from "../../styled/About/AboutImage";
import {
  ColCentered,
  ColFlexedCenter,
  PageMarginTop,
} from "../../styled/Common/Common";
import "../../scss/about.scss";
import { AboutMeCodeBox } from "../AboutMeCodeBox";
import { AboutText, AboutTextContainer } from "../../styled/About/AboutText";
import { Footer } from "../Footer";
import { IIsFixedNavbarProps } from "../interfaces/IIsFixedNavbarProps";

export const AboutPage = ({ isFixed }: IIsFixedNavbarProps) => {
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
                <AboutText>
                  Om mig... jag är based i sthlm Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Veritatis ipsam quidem
                  reiciendis, distinctio voluptate, eum officia eos cum
                  perferendis tempore quod velit voluptas aliquid quae inventore
                  aliquam nam accusantium sit?
                </AboutText>
              </AboutTextContainer>
            </AboutMeImgDescriptionWrapper>
            <AboutMeCodeBox />
          </ColFlexedCenter>
        </ColCentered>
      </PageMarginTop>
      <Footer isFixed={isFixed}></Footer>
    </>
  );
};
