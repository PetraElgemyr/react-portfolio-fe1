import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowCentered = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColCentered = styled(Col)`
  justify-content: center;
  align-items: center;
`;

export const ColCenteredResponsive = styled(ColCentered)`
  justify-content: center;
  align-items: flex-start;
  width: 80vw;

  @media screen and (${devices.tablet}) {
    align-items: center;
    text-align: center;
  }
`;

export const ColFlexedCenter = styled(ColCentered)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  gap: 20px;

  @media screen and (${devices.laptop}) {
    gap: 40px;
    padding: 4%;
  }

  @media screen and (${devices.laptopL}) {
    gap: 60px;
  }

  @media screen and (${devices.fourK}) {
    gap: 85px;
  }
`;
