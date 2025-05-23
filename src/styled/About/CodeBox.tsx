import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const CodeBox = styled.article`
  width: 100%;
  padding: 2% 0;

  @media screen and (${devices.tablet}) {
    padding: 5%;
  }
`;

export const CodeBoxWrapper = styled.article`
  width: 90%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 6% 2% 6% 2%;
  box-shadow: 0 0px 20px 1px #ffffff42;

  @media screen and (${devices.tablet}) {
    width: 60%;
    padding: 2%;
  }

  @media screen and (${devices.laptop}) {
    width: 45%;
    padding: 1%;
  }

  @media screen and (${devices.laptopL}) {
    width: 40%;
  }
`;
