import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  height: 350px;
  border-radius: 6px 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  ${mixins.fonts.titleS}
  margin-top: 16px;
  color: ${(props) => props.theme.colors["base-subtitle"]};
`;

export const SubTitle = styled.h2`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme.colors["base-label"]};
  ${mixins.fonts.textS}
`;

export const Image = styled.img`
  margin-top: -20px;
  align-self: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
`;

export const Price = styled.span`
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-left: 18px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const DivTag = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
