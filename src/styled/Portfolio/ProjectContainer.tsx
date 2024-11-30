import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectContainer = styled.section`
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 6px 12px #ffffff42;

  @media screen and (${devices.tablet}) {
    width: 75%;
    height: 300px;
  }

  @media screen and (${devices.laptop}) {
    width: 45%;
    height: 350px;
  }

  @media screen and (${devices.laptopL}) {
    height: 450px;
  }

  @media screen and (${devices.fourK}) {
    width: 30%;
    height: 550px;
  }
`;
