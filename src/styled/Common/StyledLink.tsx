import styled from "styled-components";
import { devices } from "../Variables/Devices";
import { colors } from "../Variables/Colors";

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

export const StyledFooterLink = styled(StyledLink)`
  display: block;
  border: none;

  &:hover {
    color: ${colors.primary_orange};
  }
`;

export const FooterText = styled.p`
  color: white;
  font-size: 1rem;
  margin: 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

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

export const StyledLinkButton = styled(StyledLink)`
  border: 1px solid white;
  padding: 4%;
  border-radius: 5px;
  box-shadow: 0 6px 15px #ffffff42;

  @media screen and (${devices.tablet}) {
    padding: 3%;
    border-radius: 10px;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
    margin-top: 18px;
    padding: 2%;
  }

  &:hover {
    box-shadow: 0 10px 20px #ffffff42;
    color: ${colors.primary_orange};
  }
`;

export const FooterIcon = styled.i`
  overflow: hidden;
  width: 10%;
`;
