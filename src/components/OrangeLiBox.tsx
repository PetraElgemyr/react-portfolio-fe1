import styled from "styled-components";
import { colors } from "../styled/Variables/Colors";

interface IOrangeLiBox {
  isActivePage: boolean;
}

export const OrangeLiBox = styled.li<IOrangeLiBox>`
  padding: 10px;
  text-decoration: none;
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  background-color: ${(props) => props.isActivePage && colors.primary_orange};
  border-radius: ${(props) => props.isActivePage && "5px"};

  &:hover {
    background-color: ${colors.primary_orange};
    border-radius: 5px;
  }
`;