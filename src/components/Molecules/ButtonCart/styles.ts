import styled from "styled-components";
import { ButtonProps } from ".";
import { mixins } from "../../../styles/mixins";

export const Container = styled.button<ButtonProps>`
  justify-content: center;
  position: relative;
  width: 100%;
  border-radius: 6px;
  height: 51px;
  width: 179px;
  border: none;
  outline: none;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors["purple-light"] : "#e6e5e5"};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.purple : theme.colors["base-text"]};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border: 1px solid transparent;
  text-transform: uppercase;
  ${mixins.fonts.buttonM};
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.purple};
  }

  color: ${({ theme }) => theme.colors["base-text"]};

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: #fff;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1<{
  hasIcon: boolean;
  size: number;
}>`
  margin-left: ${({ hasIcon }) => (hasIcon ? '8px' : '0px')};
  color: #574f4d;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
`;