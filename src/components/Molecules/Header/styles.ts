import styled from "styled-components";

export const Container = styled.div`
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 85px;
  height: 40px;
`;

export const Aside = styled.aside`
display:flex ;
gap: 20px;
position: relative;
`;

export const CartButtonWrapper = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.theme.colors['yellow-dark']};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid ${props => props.theme.colors.white};
`;
