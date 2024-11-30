import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectImageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;
  object-position: center;

  @media screen and (${devices.laptop}) {
    height: unset;
  }

  @media screen and (${devices.fourK}) {
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 0;

  @media screen and (${devices.tablet}) {
    height: 270px;
  }

  @media screen and (${devices.tablet}) {
    height: 300px;
  }
`;
