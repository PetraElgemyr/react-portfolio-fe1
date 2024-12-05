import styled from "styled-components";
import { ColCentered } from "../Common/Common";
import { devices } from "../Variables/Devices";

export const SkillContainer = styled.article`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const SkillPageTitle = styled(ColCentered)`
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 6%;

  @media screen and (${devices.tablet}) {
    top: 11%;
  }
`;

export const DownloadCvButtonContainer = styled(ColCentered)`
  width: 100%;
  padding: 6%;
  position: absolute;
  bottom: 0;
  margin: 0;
  z-index: 1000;

  @media screen and (${devices.tablet}) {
    padding: 10% 4% 2% 4%;
  }

  @media screen and (${devices.laptop}) {
    flex-direction: row;
    gap: 60px;
    align-items: flex-start;
  }

  @media screen and (${devices.laptopL}) {
    gap: 80px;
  }

  @media screen and (${devices.fourK}) {
    gap: 95px;
  }
`;
