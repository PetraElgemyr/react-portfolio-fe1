import styled from "styled-components";
import { Col } from "../Common/Common";
import { devices } from "../Variables/Devices";

// export const ProjectCardTitle = styled.h4`
//   font-size: 1.5rem;
//   margin: 8%;
//   padding-left: 3%;

//   @media screen and (${devices.tablet}) {
//     margin: 6% 8%;
//   }

//   @media screen and (${devices.laptop}) {
//     padding: 5%;
//     margin: 4%;
//   }
// `;

export const ProjectCardTextContainer = styled(Col)`
  justify-content: center;
  align-items: flex-start;
  padding: 6%;
  padding-top: 2%;
  width: 100%;

  @media screen and (${devices.tablet}) {
    padding: 1% 4%;
  }
`;

export const ProjectCardTextCenterContainer = styled(Col)`
  justify-content: center;
  align-items: center;
  padding: 4%;
  width: 100%;

  @media screen and (${devices.tablet}) {
    padding: 2%;
  }
`;

export const ProjectCardText = styled.span`
  display: block;
  font-size: 1rem;
  padding: 0 6%;
  overflow: hidden;

  @media screen and (${devices.tablet}) {
    font-size: 1.1rem;
    padding: 0 7% 0 7%;
    width: 100%;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
    padding: 0 10%;
  }

  @media screen and (${devices.laptopL}) {
    font-size: 1.3rem;
  }

  @media screen and (${devices.fourK}) {
    font-size: 1.4rem;
  }
`;

export const ProjectCardTitle = styled(ProjectCardText)`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 5% 6% 0% 6%;

  @media screen and (${devices.tablet}) {
    font-size: 1.8rem;
    padding: 4% 6%;
  }

  @media screen and (${devices.laptop}) {
    padding: 5% 10%;
  }
`;
