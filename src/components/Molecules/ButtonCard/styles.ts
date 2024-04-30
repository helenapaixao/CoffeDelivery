import styled from "styled-components";
import { ButtonProps } from ".";

export const Container = styled.button<ButtonProps>`
  border-radius: 6px;
  height: 38px;
  width: ${({ size }) =>
    size === "s" ? "38px" : size === "m" ? "210px" : "368px"};
  border: none;
  outline: none;
  background-color: #4b2995;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const IconContainer = styled.div<{ size: string }>`
  svg {
    width: ${({ size }) =>
      size === "s" ? "20px" : size === "m" ? "20px" : "20px"};
    height: ${({ size }) =>
      size === "s" ? "20px" : size === "m" ? "20px" : "20px"};
    color: #fff;
    align-items: ${({ size }) =>
      size === "s" ? "center" : size === "m" ? "center" : "center"};
    margin-left: 2px;
    margin-top: 2px;
  }
`;
