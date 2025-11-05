import styled from "styled-components";
import { ButtonProps } from ".";

export const Container = styled.button<ButtonProps>`
  border-radius: 6px;
  height: 38px;
  min-width: ${({ size }) =>
    size === "s" ? "38px" : size === "m" ? "210px" : "368px"};
  max-width: ${({ size }) =>
    size === "s" ? "38px" : size === "m" ? "300px" : "368px"};
  width: ${({ size }) =>
    size === "s" ? "38px" : size === "m" ? "auto" : "368px"};
  border: none;
  outline: none;
  background-color: ${({ size }) =>
    size === "s" ? "#F1E9C9" : size === "m" ? "#EBE5F9" : "#DBAC2C"};
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`;

export const IconContainer = styled.div<{ size: string }>`
  svg {
    width: ${({ size }) =>
      size === "s" ? "20px" : size === "m" ? "20px" : "20px"};
    height: ${({ size }) =>
      size === "s" ? "20px" : size === "m" ? "20px" : "20px"};
    color: ${({ size }) =>
      size === "s" ? "#C47F17" : size === "m" ? "#8047F8" : "#FFFF"};
    align-items: ${({ size }) =>
      size === "s" ? "center" : size === "m" ? "center" : "center"};
  }
`;

export const Title = styled.h1<{ size: string; hasIcon: boolean }>`
  margin-left: ${({ hasIcon }) => (hasIcon ? "8px" : "0")};
  color: ${({ size }) =>
    size === "s" ? "#4B2995" : size === "m" ? "#4B2995" : "#FFFF"};
  font-weight: ${({ size }) =>
    size === "s" ? "200" : size === "m" ? "400" : "700"};
  font-family: "Roboto", sans-serif;
  font-size: ${({ size }) =>
    size === "s" ? "0px" : size === "m" ? "14px" : "14px"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  text-align: left;
`;
