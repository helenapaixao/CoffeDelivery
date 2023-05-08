import styled from "styled-components";
import { ButtonProps } from ".";

export const Container = styled.button<ButtonProps>`
  justify-content: center;
  width: 100%;
  border-radius: 6px;
  height: 38px;
  width: ${({ size }) =>
    size === "s" ? "38px" : size === "m" ? "143px" : "368px"};
  border: none;
  outline: none;
  background-color: ${({ size }) =>
    size === "s" ? "#F1E9C9" : size === "m" ? "#EBE5F9" : "#DBAC2C"};
`;

export const IconContainer = styled.div<{ size: string }>`
  border: none;
  outline: none;
`;

export const Title = styled.h1<{ size: string; hasIcon: boolean }>`
  text-align: center;
  flex: auto;
  margin-left: ${({ hasIcon }) => (hasIcon ? "10px" : "0px")};
`;
