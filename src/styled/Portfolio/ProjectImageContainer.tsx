import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectImageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;
  object-position: top center;
  border-radius: 10px 10px 0 0;
`;

export const ProjectImage = styled.img`
  width: 100%;
  min-height: 200px;
  object-fit: cover;
  object-position: top center;
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 0;

  @media screen and (${devices.tablet}) {
    max-height: 300px;
  }

  @media screen and (${devices.laptop}) {
    height: 310px;
  }

  @media screen and (${devices.laptopL}) {
    height: 400px;
  }
`;
