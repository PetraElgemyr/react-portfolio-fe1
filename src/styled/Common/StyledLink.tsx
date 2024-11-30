import styled from "styled-components";
import { devices } from "../Variables/Devices";

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  transition: border 0.2s;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    border-color: white;
  }

  @media screen and (${devices.tablet}) {
    font-size: 1.1rem;
    margin-top: 15px;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
    margin-top: 18px;
  }

  @media screen and (${devices.laptopL}) {
    font-size: 1.3rem;
  }

  @media screen and (${devices.fourK}) {
    font-size: 1.4rem;
  }
`;
