import styled from "styled-components";
import { devices } from "./Variables/Devices";

export const CenteredArticle = styled.article`
  padding: 5% 8% 5% 8%;

  @media screen and (${devices.tablet}) {
    padding: 3% 7% 3% 7%;
  }

  @media screen and (${devices.laptop}) {
    padding: 0 10% 10% 10%;
  }
`;
