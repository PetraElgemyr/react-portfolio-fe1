import styled from "styled-components";
import { devices } from "../Variables/Devices";
import { ColCentered } from "../Common/Common";

export const AboutImageContainer = styled.div`
  width: 70%;
  border-radius: 10px;
  box-shadow: 0 0px 25px 1px #ffffff42;

  @media screen and (${devices.tablet}) {
    width: 38%;
    margin-bottom: 2%;
  }

  @media screen and (${devices.laptop}) {
    width: 60%;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const AboutTextContainer = styled.article`
  width: 100%;

  @media screen and (${devices.tablet}) {
    width: 90%;
  }

  @media screen and (${devices.laptop}) {
    width: 95%;
  }

  @media screen and (${devices.laptopL}) {
    width: 90%;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;

  @media screen and (${devices.tablet}) {
    font-size: 1.2rem;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
  }

  @media screen and (${devices.laptopL}) {
    font-size: 1.3rem;
  }

  @media screen and (${devices.fourK}) {
    font-size: 1.4rem;
  }
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
