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
          <h1>Who am I?</h1>
          <ColFlexedCenter>
            <AboutMeImgDescriptionWrapper>
              <AboutImageContainer>
                <AboutImage src="/IMG_6208.jpg" alt="Petra Elgemyr" />
              </AboutImageContainer>

              <AboutTextContainer>
                <AboutText>
                  My name is Petra Elgemyr and I'm based in Stockholm. With a
                  logical mindset and a creative spark, I decided in 2022 to
                  pursue a career in front-end development. During my time at
                  Medieinstitutet and throughout my internships, I discovered a
                  growing interest in exploring the backend side of development
                  as well. After graduating as a front-end developer in May
                  2024, I continued my learning journey by starting a .NET web
                  development program at Nackademin in August 2024.
                </AboutText>

                <AboutText>
                  I'm passionate about growing as a developer and always strive
                  to expand my knowledge. Below you'll find a selection of my
                  projects — some created during my studies, others built in my
                  free time just for fun. If you'd like to get in touch or know
                  more about me, feel free to reach out!
                </AboutText>
                {/* <AboutText>
                  My name is Petra Elgemyr and I'm based in Stockholm. I have
                  always had a logic mind and felt creative so in 2022 I decided
                  to jump on the oppertunity to become a front end developer.
                  During my time at Medieinstitutet and my internships, I felt
                  more and more that I wanted to explore more. Directly after my
                  graduation as a front end developer in May 2024 I began my
                  studies as a .Net web developer at Nackademin in August 2024.
                </AboutText>

                <AboutText>
                  I find it exciting and evolving to widen my knowledge and to
                  never stop learning! Here are a few of my projects. Some of
                  them are school projects and some of them are made in my free
                  time just for the fun of it. If you want to know more about
                  me, you are welcome to contact me.
                </AboutText> */}
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
