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
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";

export const AboutPage = ({ isFixed }: IIsFixedNavbarProps) => {
  const location = useLocation();
  const { setActivePage } = useAppContext();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname, setActivePage]);

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
