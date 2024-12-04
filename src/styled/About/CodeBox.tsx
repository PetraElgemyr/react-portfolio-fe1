import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const CodeBox = styled.article`
  width: 90%;
  border-radius: 10px;
  padding: 6%;

  @media screen and (${devices.tablet}) {
    width: 75%;
    padding: 5%;
  }

  @media screen and (${devices.laptop}) {
    width: 50%;
  }

  @media screen and (${devices.laptop}) {
    width: 50%;
  }
`;

export const CodeBoxWrapper = styled(CodeBox)`
  background-color: rgba(0, 0, 0, 0.6);
  width: 90%;

  @media screen and (${devices.laptop}) {
    width: 50%;
  }

  @media screen and (${devices.laptopL}) {
    width: 45%;
  }
`;
