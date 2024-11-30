import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectContainer = styled.section`
  border: 1px solid white;
  width: 100%;
  height: 200px;

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
