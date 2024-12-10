import styled from "styled-components";
import { devices } from "./Variables/Devices";

interface IResponsiveFooterProps {
  isFixed: boolean;
}

export const ResponsiveFooter = styled.footer<IResponsiveFooterProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1900;
  bottom: 0;

  position: ${(props) => props.isFixed && "fixed"};

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const FooterSection = styled.section`
  width: 100%;
`;
