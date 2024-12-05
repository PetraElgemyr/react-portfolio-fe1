import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectContainer = styled.section`
  width: 90%;
  border-radius: 2px;
  // border: 1px solid #e9793a;
  padding-bottom: 8%;
  box-shadow: 0 6px 12px #ffffff42;

  @media screen and (${devices.tablet}) {
    width: 45%;
    padding-bottom: 4%;
  }

  @media screen and (${devices.laptop}) {
    width: 40%;
    padding-bottom: 3%;
    // border: 2px solid #e9793a;
  }

  @media screen and (${devices.laptopL}) {
    border-radius: 4px;
    padding-bottom: 2%;
    width: 30%;
  }

  @media screen and (${devices.fourK}) {
    width: 30%;
  }
`;
