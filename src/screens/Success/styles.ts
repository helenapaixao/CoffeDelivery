import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  max-width: 1160px;
  margin: 0 auto;
`;

export const SuccessContainer = styled.div`
  width: 100%;
  
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: ${props => props.theme.colors['yellow-dark']};
    margin-bottom: 4px;
  }

  > div:first-child p {
    font-size: 20px;
    color: ${props => props.theme.colors['base-subtitle']};
    margin-bottom: 40px;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  border-radius: 6px 36px;
  background: linear-gradient(135deg, ${props => props.theme.colors.white} 0%, ${props => props.theme.colors.white} 100%);
  border: 1px solid ${props => props.theme.colors['purple-dark']};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 6px 36px;
    background: linear-gradient(135deg, #8047F8 0%, #DBAC2C 100%);
    z-index: -1;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  > div:last-child {
    flex: 1;
    
    p {
      font-size: 16px;
      color: ${props => props.theme.colors['base-text']};
      margin: 0;
      line-height: 1.3;
      
      strong {
        font-weight: 700;
      }
    }
  }
`;

