import styled from "styled-components";
import { devices } from "./Variables/Devices";

export const ResponsiveFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2001;
  bottom: 0;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const FooterSection = styled.section`
  width: 100%;
`;
