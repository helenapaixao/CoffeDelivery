import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors["base-button"]} ;
  height: 38px;
  width: 72px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  display: flex;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors["base-button"]} ;
  border: none;
  color: ${(props) => props.theme.colors["purple"]};
  outline: none;
  font-size: 16px; 
  width: 40px; 
  
`;

export const Text = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin: 0 1px;
`;
