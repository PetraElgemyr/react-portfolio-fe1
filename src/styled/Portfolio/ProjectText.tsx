import styled from "styled-components";
import { Col } from "../Common/Common";
import { devices } from "../Variables/Devices";

export const ProjectCardTitle = styled.h4`
  font-size: 1.5rem;
  margin: 5%;
`;

export const ProjectCardTextContainer = styled(Col)`
  justify-content: center;
  align-items: flex-start;
  margin: 6%;
  margin-top: 0;
  width: 90%;
`;

export const ProjectCardText = styled.span`
  display: block;
  font-size: 1rem;

  @media screen and (${devices.tablet}) {
    font-size: 1.1rem;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
  }
`;
