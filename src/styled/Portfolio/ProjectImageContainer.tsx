import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const ProjectImageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;
  object-position: center;
  border-radius: 5px 5px 0 0;

  @media screen and (${devices.tablet}) {
    border-radius: 10px 10px 0 0;
  }

  @media screen and (${devices.laptop}) {
  }

  @media screen and (${devices.laptopL}) {
    border-radius: 15px 15px 0 0;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  min-height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px 5px 0 0;
  margin: 0;
  padding: 0;

  @media screen and (${devices.tablet}) {
    max-height: 300px;
    border-radius: 10px 10px 0 0;
  }

  @media screen and (${devices.laptop}) {
    height: 310px;
  }

  @media screen and (${devices.laptopL}) {
    border-radius: 15px 15px 0 0;
    height: 400px;
  }
`;
