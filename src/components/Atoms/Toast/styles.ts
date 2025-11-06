import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 400px;
  animation: slideIn 0.3s ease-out;

  svg {
    color: ${({ theme }) => theme.colors['purple']};
    flex-shrink: 0;
  }

  span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

