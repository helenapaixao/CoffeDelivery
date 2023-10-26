import styled from "styled-components";
import { ButtonProps } from ".";

export const Container = styled.button<ButtonProps>`
  justify-content: center;
  position: relative;
  width: 100%;
  border-radius: 6px;
  height: 38px;
  width: 38px;
  border: none;
  outline: none;
  background-color: #4B2995;
    display: flex; /* Make the button a flex container */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
`;

export const IconContainer = styled.div`
  display: flex; /* Make the container a flex container */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  border: none;
  outline: none;
  color: #FFF;
  height:20px ;
  align-items: center;
  justify-content: center ;
  
`;

export const Title = styled.h1<{ size: string; hasIcon: boolean }>`
 margin-left: ${({ hasIcon }) => (hasIcon ? "8px" : "0px")}; 
  margin-left: ${({ hasIcon }) => (hasIcon ? "27px" : "0px")};
  color: ${({ size }) =>
    size === "s" ? "#4B2995" : size === "m" ? "#4B2995" : "#FFFF"};
  display: flex;
  font-weight: ${({ size }) =>
    size === "s" ? "200" : size === "m" ? "400" : "700"};
  font-family: "Roboto", sans-serif;
  font-size: ${({ size }) =>
    size === "s" ? "0px" : size === "m" ? "14px" : "14px"};
`;
