import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectContainer = styled.section`
  width: 100%;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 6px 12px #ffffff42;

  @media screen and (${devices.tablet}) {
    width: 75%;
    border-radius: 10px 10px 0 0;
  }

  @media screen and (${devices.laptop}) {
    width: 45%;
    box-shadow: 0 6px 15px #ffffff42;
  }

  @media screen and (${devices.laptopL}) {
    border-radius: 15px 15px 0 0;
  }

  @media screen and (${devices.fourK}) {
    width: 30%;
  }
`;
