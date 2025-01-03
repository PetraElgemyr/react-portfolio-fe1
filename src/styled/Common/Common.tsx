import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RowCentered = styled(Row)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  padding: 6%;
  gap: 30px;

  @media screen and (${devices.laptop}) {
    flex-direction: row;
    gap: 70px;
    padding: 4%;
    align-items: flex-start;
  }

  @media screen and (${devices.laptopL}) {
    gap: 85px;
  }

  @media screen and (${devices.fourK}) {
    gap: 95px;
  }
`;

export const PageMarginTop = styled.div`
  margin-top: 7%;

  @media screen and (${devices.tablet}) {
    margin-top: 10%;
  }

  @media screen and (${devices.laptop}) {
    margin-top: 8%;
  }

  @media screen and (${devices.laptopL}) {
    margin-top: 6%;
  }
  @media screen and (${devices.fourK}) {
    margin-top: 5%;
  }
`;
