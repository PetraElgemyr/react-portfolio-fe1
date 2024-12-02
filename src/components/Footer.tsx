import { FooterSection, ResponsiveFooter } from "../styled/ResponsiveFooter";

export const Footer = () => {
  return (
    <>
      <ResponsiveFooter>
        <FooterSection>
          <p>LinkedIn</p>
          <p>Github</p>
        </FooterSection>
        <FooterSection>
          <p>Email</p>
          <p>Location: Stockholm, Sweden</p>
        </FooterSection>
      </ResponsiveFooter>
    </>
  );
};
