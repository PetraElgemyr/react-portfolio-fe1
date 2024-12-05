import {
  FooterIcon,
  FooterText,
  StyledFooterLink,
} from "../styled/Common/StyledLink";
import { FooterSection, ResponsiveFooter } from "../styled/ResponsiveFooter";

interface IFooterProps {
  isFixed: boolean;
}

export const Footer = ({ isFixed }: IFooterProps) => {
  return (
    <>
      <ResponsiveFooter isFixed={isFixed}>
        <FooterSection>
          <StyledFooterLink
            target="_blank"
            href="https://github.com/PetraElgemyr/"
          >
            <FooterIcon className="fa-brands fa-github"></FooterIcon>
            <span>Github</span>
          </StyledFooterLink>
          <StyledFooterLink
            target="_blank"
            href="https://www.linkedin.com/in/petra-elgemyr-a707b724b/"
          >
            <FooterIcon className="fa-brands fa-linkedin"></FooterIcon>
            <span> LinkedIn</span>
          </StyledFooterLink>
        </FooterSection>
        <FooterSection>
          <FooterText>
            <FooterIcon className="fa-sharp fa-solid fa-envelope"></FooterIcon>
            <span>Email: Petra.elgemyr@gmail.com</span>
          </FooterText>
          <FooterText>
            {/* <FooterIcon className="fa-solid fa-map-pin"></FooterIcon> */}
            <FooterIcon className="fa-sharp fa-solid fa-location-crosshairs"></FooterIcon>
            <span> Location: Stockholm, Sweden</span>
          </FooterText>
        </FooterSection>
      </ResponsiveFooter>
    </>
  );
};
