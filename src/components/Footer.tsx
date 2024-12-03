import { FooterText, StyledFooterLink } from "../styled/Common/StyledLink";
import { FooterSection, ResponsiveFooter } from "../styled/ResponsiveFooter";

export const Footer = () => {
  return (
    <>
      <ResponsiveFooter>
        <FooterSection>
          <StyledFooterLink
            target="_blank"
            href="https://www.linkedin.com/in/petra-elgemyr-a707b724b/"
          >
            LinkedIn
          </StyledFooterLink>

          <StyledFooterLink
            target="_blank"
            href="https://github.com/PetraElgemyr/"
          >
            Github
          </StyledFooterLink>
        </FooterSection>
        <FooterSection>
          <FooterText>Email: Petra.elgemyr@gmail.com</FooterText>
          <FooterText>Location: Stockholm, Sweden</FooterText>
        </FooterSection>
      </ResponsiveFooter>
    </>
  );
};
