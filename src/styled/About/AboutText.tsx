import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const AboutTextContainer = styled.article`
  width: 100%;

  @media screen and (${devices.tablet}) {
    width: 90%;
  }

  @media screen and (${devices.laptop}) {
    width: 95%;
  }

  @media screen and (${devices.laptopL}) {
    width: 90%;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;

  @media screen and (${devices.tablet}) {
    font-size: 1.2rem;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.3rem;
  }

  @media screen and (${devices.laptopL}) {
    font-size: 1.4rem;
  }

  @media screen and (${devices.fourK}) {
    font-size: 1.7rem;
  }
`;
