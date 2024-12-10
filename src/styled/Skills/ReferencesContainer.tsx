import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ReferenceContainer = styled.article`
  width: 100%;
  padding: 10%;

  @media screen and (${devices.tablet}) {
    padding: 8%;
  }

  @media screen and (${devices.laptop}) {
    padding: 2% 12%;
  }

  @media screen and (${devices.laptopL}) {
    padding: 2% 15%;
  }
`;

export const ReferenceTextName = styled.p`
  font-size: 1rem;
  font-weight: bold;

  @media screen and (${devices.tablet}) {
    font-size: 1.1rem;
    margin-top: 15px;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
    margin-top: 18px;
  }

  @media screen and (${devices.laptopL}) {
    font-size: 1.3rem;
  }

  @media screen and (${devices.fourK}) {
    font-size: 1.4rem;
  }
`;

export const ReferenceText = styled(ReferenceTextName)`
  font-style: italic;
  font-weight: unset;
`;
