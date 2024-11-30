import styled from "styled-components";
import { colors } from "../Variables/Colors";
import { RowCentered } from "../Common/Common";
import { devices } from "../Variables/Devices";

export const SkillBubble = styled.span`
  background-color: ${colors.primary_orange};
  padding: 3%;
  margin: 2%;
  border-radius: 2px;

  @media screen and (${devices.tablet}) {
    padding: 2.5%;
  }
`;

export const SkillsContainer = styled(RowCentered)`
  width: 100%;
  padding: 2%;
`;
