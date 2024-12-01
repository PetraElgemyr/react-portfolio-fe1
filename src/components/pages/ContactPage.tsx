import { CenteredArticle } from "../../styled/CenteredArticle";
import { ColCentered, PageMarginTop } from "../../styled/Common/Common";
import { StyledLink } from "../../styled/Common/StyledLink";
import { ProjectCardText } from "../../styled/Portfolio/ProjectText";

export const ContactPage = () => {
  return (
    <>
      <PageMarginTop>
        <ColCentered>
          <h1>Contact page</h1>
          <CenteredArticle>
            If you want to contact me or just connect, you can either email me
            directly, contact me on Linkedin or use the contact form below to
            send me a message.
          </CenteredArticle>
          <ProjectCardText>
            <StyledLink
              target="_blank"
              href="https://www.linkedin.com/in/petra-elgemyr-a707b724b/"
            >
              LinkedIn
            </StyledLink>
          </ProjectCardText>

          <ProjectCardText>
            Email:{"  "}
            <StyledLink href="mailto: petra.elgemyr@gmail.com">
              Petra.elgemyr@gmail.com
            </StyledLink>
          </ProjectCardText>
        </ColCentered>
      </PageMarginTop>
    </>
  );
};
