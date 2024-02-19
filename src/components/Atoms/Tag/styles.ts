import styled from "styled-components";
import { mixins } from '../../../styles/mixins'
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors["yellow-light"]};
  border-radius: 100px;
  width: 81px;
  height: 21px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  display: flex;
`;

export const TextTag = styled.h1`
  color: ${(props) => props.theme.colors["yellow-dark"]};
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  justify-items: center;
  align-items: center;
  gap: 4px;
  ${mixins.fonts.tag}
`;
