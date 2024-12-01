import styled from "styled-components";
import { devices } from "./Variables/Devices";

export const CenteredArticle = styled.article`
  padding: 5% 8% 8% 8%;

  @media screen and (${devices.tablet}) {
    padding: 3% 7% 3% 7%;
  }
`;
