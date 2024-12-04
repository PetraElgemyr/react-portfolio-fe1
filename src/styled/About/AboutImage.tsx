import styled from "styled-components";
import { devices } from "../Variables/Devices";
import { ColCentered } from "../Common/Common";

export const AboutImageContainer = styled.div`
  width: 70%;
  border-radius: 10px;
  box-shadow: 0 0px 25px 1px #ffffff42;
  margin: 25px 0 25px 0;

  @media screen and (${devices.tablet}) {
    width: 38%;
  }

  @media screen and (${devices.laptop}) {
    width: 60%;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const AboutMeImgDescriptionWrapper = styled(ColCentered)`
  width: 90%;

  @media screen and (${devices.laptop}) {
    width: 40%;
  }

  @media screen and (${devices.laptopL}) {
    width: 35%;
  }
`;
