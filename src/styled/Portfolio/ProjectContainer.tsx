import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectContainer = styled.section`
  width: 85%;
  border-radius: 10px 10px 5px 5px;
  box-shadow: 0 6px 12px #ffffff42;
  padding: 3px;
  position: relative;
  background: linear-gradient(to bottom, #e9793a, #793ae9);

  @media screen and (${devices.tablet}) {
    width: 68%;
  }

  @media screen and (${devices.laptop}) {
    width: 40%;
    box-shadow: 0 6px 15px #ffffff42;
  }

  @media screen and (${devices.laptopL}) {
    width: 32%;
  }

  @media screen and (${devices.fourK}) {
    width: 29%;
  }
`;

export const BlackBox = styled.div`
  background: #040c1f;
  color: white;
  border-radius: 10px 10px 5px 5px;
  padding-bottom: 5%;

  @media screen and (${devices.laptopL}) {
    padding-bottom: 3%;
  }
`;
