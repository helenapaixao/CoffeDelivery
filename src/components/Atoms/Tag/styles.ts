import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors["yellow-light"]};
  border-radius: 100px;
  width: 81px;
  height: 21px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const TextTag = styled.h1`
  font-family: "Baloo 2", cursive;
  color: ${(props) => props.theme.colors["yellow-dark"]};
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  justify-items: center;
  align-items: center;
`;
