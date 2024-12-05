import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectImageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;
  object-position: center;
  border-radius: 2px 2px 0 0;

  @media screen and (${devices.laptopL}) {
    border-radius: 4px 4px 0 0;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  min-height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 2px 2px 0 0;
  margin: 0;
  padding: 0;

  @media screen and (${devices.tablet}) {
    max-height: 300px;
  }

  @media screen and (${devices.laptop}) {
    height: 310px;
  }

  @media screen and (${devices.laptopL}) {
    border-radius: 4x 4px 0 0;
    height: 450px;
  }
`;
